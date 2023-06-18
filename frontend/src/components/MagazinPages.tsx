import { useEffect, useState } from "react";
import * as imagesModule from "../assets/magazinpage/images";
import { buttonsPerPage } from "../functions/imageCropButton";

interface ImagesModule {
  [key: string]: string;
}

interface MagazinPagesProps {
  pageNumber: number;
}

interface ButtonConfig {
  cssClass: string;
}

const pageImg = imagesModule as ImagesModule;

const MagazinPages: React.FC<MagazinPagesProps> = ({ pageNumber }) => {
  const [currentImage1, setCurrentImage1] = useState(pageImg.pageImg1);
  const [currentImage2, setCurrentImage2] = useState(pageImg.pageImg2);

  useEffect(() => {
    setCurrentImage1(pageImg[`pageImg${pageNumber}`]);
    setCurrentImage2(pageImg[`pageImg${pageNumber + 1}`]);
  }, [pageNumber]);

  const renderButtons = (page: number) => {
    const buttonsConfig = buttonsPerPage[page] || [];
    return buttonsConfig.map((config: ButtonConfig, index: number) => (
      <button className={config.cssClass} key={index}>
        Button {index + 1}
      </button>
    ));
  };

  return (
    <div className="flex space-x-4">
      <div className="w-60">
        <img src={currentImage1} alt="page 1" />
        {renderButtons(pageNumber)}
      </div>
      <div className="w-60">
        <img src={currentImage2} alt="page 2" />
        {renderButtons(pageNumber + 1)}
      </div>
    </div>
  );
};

export default MagazinPages;
