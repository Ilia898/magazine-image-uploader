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

interface ImageCropperProps {
  deleteImg: boolean;
  saveCroppedImage: boolean;
  setDeleteImg: React.Dispatch<React.SetStateAction<boolean>>;
  setShowCroppedImage: React.Dispatch<React.SetStateAction<boolean>>;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
  deleteImg,
  setDeleteImg,
  saveCroppedImage,
  setShowCroppedImage,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const { setCroppedImgUrl } = useContext(CropperContext);

  const onCropComplete = useCallback(
    (croppedArea: CroppedArea, croppedAreaPixels: any) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const showCroppedImage = useCallback(async () => {
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
  }, [imageSrc, croppedAreaPixels]);

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
    console.log(setCroppedImage);
  }, []);

  useEffect(() => {
    onClose();
    setDeleteImg(false);
  }, [deleteImg, setDeleteImg]);

  useEffect(() => {
    showCroppedImage();
    // setShowCroppedImage(false);
  }, [saveCroppedImage]);

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
