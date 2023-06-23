import { useContext, useEffect, useState } from "react";
import * as imagesModule from "../assets/magazinpage/images";
import { buttonsPerPage } from "../functions/imageCropButton";
import { CropperContext } from "../context/cropperContext";

interface ImagesModule {
  [key: string]: string;
}

interface ButtonConfig {
  cssClass: string;
}

const pageImg = imagesModule as ImagesModule;

const MagazinPages = () => {
  const [currentImage1, setCurrentImage1] = useState(pageImg.pageImg1);
  const [currentImage2, setCurrentImage2] = useState(pageImg.pageImg2);
  const { croppedImgUrl, setIsDialogVisible, currentPage } =
    useContext(CropperContext);

  useEffect(() => {
    setCurrentImage1(pageImg[`pageImg${currentPage}`]);
    setCurrentImage2(pageImg[`pageImg${currentPage + 1}`]);
  }, [currentPage]);

  const renderButtons = (page: number) => {
    const buttonsConfig = buttonsPerPage[page] || [];
    return buttonsConfig.map((config: ButtonConfig, index: number) => (
      <div>
        {croppedImgUrl === null ? (
          <button
            className={config.cssClass}
            key={index}
            onClick={() => setIsDialogVisible(true)}
          >
            <div className="flex flex-col justify-center items-center rounded-md font-bold text-gray p-1 bg-whiteText bg-opacity-30 ">
              Foto
              <br />
              hochladen
            </div>
          </button>
        ) : (
          <img className={config.cssClass} src={croppedImgUrl} alt="" />
        )}
      </div>
    ));
  };

  return (
    <div className="relative flex space-x-4">
      <div className="w-60">
        <img src={currentImage1} alt="page 1" />
        {renderButtons(currentPage)}
      </div>
      <div className="relative w-60">
        <img src={currentImage2} alt="page 2" />
        {renderButtons(currentPage + 1)}
      </div>
    </div>
  );
};

export default MagazinPages;
