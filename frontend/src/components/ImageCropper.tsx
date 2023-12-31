import React, { useCallback, useContext, useEffect, useRef } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../functions/cropperUtils";
import { CropperContext } from "../context/cropperContext";
import { BiCloudUpload } from "react-icons/bi";

interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}

const ImageCropper = () => {
  const fileInput = useRef<HTMLInputElement | null>(null);
  const {
    setCroppedImgUrl,
    showCroppedImage,
    deleteImg,
    setDeleteImg,
    zoom,
    setZoom,
    cropImg,
    setCropImg,
    imageSrc,
    setImageSrc,
    croppedAreaPixels,
    setCroppedAreaPixels,
    setCroppedImage,
  } = useContext(CropperContext);

  const onCropComplete = useCallback(
    (_croppedArea: CroppedArea, croppedAreaPixels: CroppedArea) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    [setCroppedAreaPixels]
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
  }, [imageSrc, croppedAreaPixels, setCroppedImage, setCroppedImgUrl]);

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
  }, [setCroppedImage, setImageSrc]);

  useEffect(() => {
    onClose();
    setDeleteImg(false);
  }, [deleteImg, onClose, setDeleteImg]);

  const onButtonClick = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  return (
    <div>
      {imageSrc ? (
        <>
          <div className="">
            <Cropper
              image={imageSrc}
              crop={cropImg}
              zoom={zoom}
              aspect={4 / 3}
              onCropChange={setCropImg}
              onCropComplete={onCropComplete}
              onZoomChange={setZoom}
            />
          </div>
        </>
      ) : (
        <div className="flex h-[309px] justify-center items-center">
          <button
            onClick={onButtonClick}
            className="flex w-[180px] justify-center items-center border-b-2 border-text rounded-md font-bold text-whiteText p-1 bg-braunPrimery hover:border-2"
          >
            <BiCloudUpload size={30} />
            Foto hochladen
          </button>

          <input
            type="file"
            ref={fileInput}
            onChange={onFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      )}
    </div>
  );
};

export default ImageCropper;
