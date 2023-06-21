import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import { getCroppedImg } from "../functions/cropperUtils";

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
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);

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
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels]);

  // const onClose = useCallback(() => {
  //   setCroppedImage(null);
  // }, []);

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
          <div className="">
            {/* <div className={classes.sliderContainer}>
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Zoom
              </Typography>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby="Zoom"
                classes={{ root: classes.slider }}
                onChange={(e, zoom) => setZoom(zoom)}
              />
            </div> */}
            {/* <div className="">
              <Typography
                variant="overline"
                classes={{ root: classes.sliderLabel }}
              >
                Rotation
              </Typography>
              <Slider
                value={rotation}
                min={0}
                max={360}
                step={1}
                aria-labelledby="Rotation"
                classes={{ root: classes.slider }}
                onChange={(e, rotation) => setRotation(rotation)}
              />
            </div> */}
            {/* <Button
              onClick={showCroppedImage}
              variant="contained"
              color="primary"
              classes=""
            >
              Show Result
            </Button> */}
          </div>
          {/* <ImgDialog img={croppedImage} onClose={onClose} /> */}
        </>
      ) : (
        <input type="file" onChange={onFileChange} accept="image/*" />
      )}
    </div>
  );
};

export default ImageCropper;
