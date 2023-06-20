import { useEffect, useState } from "react";
import * as imagesModule from "../assets/magazinpage/images";
import { buttonsPerPage } from "../functions/imageCropButton";
import { BiImage } from "react-icons/bi";

interface ImagesModule {
  [key: string]: string;
}

interface MagazinPagesProps {
  pageNumber: number;
  openButtonTrue: () => void;
}

interface ButtonConfig {
  cssClass: string;
}

const pageImg = imagesModule as ImagesModule;

const MagazinPages: React.FC<MagazinPagesProps> = ({
  pageNumber,
  openButtonTrue,
}) => {
  const [currentImage1, setCurrentImage1] = useState(pageImg.pageImg1);
  const [currentImage2, setCurrentImage2] = useState(pageImg.pageImg2);

  useEffect(() => {
    setCurrentImage1(pageImg[`pageImg${pageNumber}`]);
    setCurrentImage2(pageImg[`pageImg${pageNumber + 1}`]);
  }, [pageNumber]);

  const renderButtons = (page: number) => {
    const buttonsConfig = buttonsPerPage[page] || [];
    return buttonsConfig.map((config: ButtonConfig, index: number) => (
      <button className={config.cssClass} key={index} onClick={openButtonTrue}>
        <div className="flex flex-col justify-center items-center rounded-md font-bold text-gray p-1 bg-whiteText bg-opacity-30 ">
          Foto
          <br />
          hochladen
        </div>
      </button>
    ));
  };

  return (
    <div className="relative flex space-x-4">
      <div className="w-60">
        <img src={currentImage1} alt="page 1" />
        {renderButtons(pageNumber)}
      </div>
      <div className="relative w-60">
        <img src={currentImage2} alt="page 2" />
        {renderButtons(pageNumber + 1)}
      </div>
    </div>
  );
};

export default MagazinPages;
