import { useContext, useEffect, useState } from "react";
import * as imagesModule from "../assets/magazinpage/images";
import { buttonsPerPage } from "../functions/imageCropButton";
import { CropperContext } from "../context/cropperContext";
import { BsTrash3 } from "react-icons/bs";

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
  const [isHovered, setIsHovered] = useState(false);
  const { croppedImgUrl, setIsDialogVisible, currentPage, setCroppedImgUrl } =
    useContext(CropperContext);

  useEffect(() => {
    setCurrentImage1(pageImg[`pageImg${currentPage}`]);
    setCurrentImage2(pageImg[`pageImg${currentPage + 1}`]);
  }, [currentPage]);

  const renderButtons = (page: number) => {
    const buttonsConfig = buttonsPerPage[page] || [];
    const handleTouchStart = () => {
      setIsHovered(true);
    };

    const handleTouchEnd = () => {
      setIsHovered(false);
    };

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
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleTouchStart}
            onMouseLeave={handleTouchEnd}
          >
            <img className={config.cssClass} src={croppedImgUrl} alt="Image" />

            <div
              className={`${config.cssClass} opacity-0 ${
                isHovered ? "opacity-100" : ""
              }`}
            >
              <button
                onClick={() => setCroppedImgUrl(null)}
                className="flex ml-auto mr-2 mt-2 mb-auto p-1 shadow-md border-2 border-whiteText rounded-md text-redPrimery bg-whiteText"
              >
                <BsTrash3 size={20} />
              </button>
            </div>
          </div>
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
