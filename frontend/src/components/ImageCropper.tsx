import React, { useCallback, useContext, useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../functions/cropperUtils";
import { CropperContext } from "../context/cropperContext";

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

const ImageCropper = () => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const {
    setCroppedImgUrl,
    showCroppedImage,
    deleteImg,
    setDeleteImg,
    zoom,
    setZoom,
  } = useContext(CropperContext);

  const onCropComplete = useCallback(
    (croppedArea: CroppedArea, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const callCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg({
        imageSrc,
        pixelCrop: croppedAreaPixels,
      });
      console.log("donee", { croppedImage });
      setCroppedImage(croppedImage);
      setCroppedImgUrl(croppedImage);
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, setCroppedImgUrl]);

  useEffect(() => {
    callCroppedImage();
  }, [callCroppedImage, showCroppedImage]);

  const readFile = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const imageDataUrl: string = await readFile(file);

      setImageSrc(imageDataUrl);
    }
  };

  const onClose = useCallback(() => {
    setCroppedImage(null);
    setImageSrc(null);
  }, []);

  useEffect(() => {
    onClose();
    setDeleteImg(false);
  }, [deleteImg, setDeleteImg]);

  return (
    <div>
      {imageSrc ? (
        <>
          <div className="">
            <Cropper
              image={imageSrc}
              crop={crop}
              rotation={rotation}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCrop}
              onRotationChange={setRotation}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </div>
  );
};

export default ImageCropper;
