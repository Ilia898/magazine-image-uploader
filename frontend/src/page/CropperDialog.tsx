import React, { useContext, useState } from "react";
import ImageCropper from "../components/ImageCropper";
import { CropperContext } from "../context/cropperContext";
import {
  BiX,
  BiExpand,
  BiUpArrowAlt,
  BiDownArrowAlt,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiZoomIn,
  BiZoomOut,
} from "react-icons/bi";

const CropperDialog = () => {
  const [deleteImg, setDeleteImg] = useState(false);
  const [showCroppedImage, setShowCroppedImage] = useState(false);
  const { setIsDialogVisible } = useContext(CropperContext);

  const saveBtn = () => {
    setShowCroppedImage(true);
    setIsDialogVisible(false);
  };
  return (
    <div className="w-[550px] h-[600px] bg-whiteText rounded-lg">
      <div className="flex px-4 py-4 justify-end">
        <button onClick={() => setIsDialogVisible(false)}>
          <BiX size={37} />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-[220px] flex justify-between">
          <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
            <BiLeftArrowAlt size={25} />
          </button>
          <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
            <BiRightArrowAlt size={25} />
          </button>
          <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
            <BiDownArrowAlt size={25} />
          </button>
          <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
            <BiUpArrowAlt size={25} />
          </button>
          <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
            <BiExpand size={25} />
          </button>
        </div>
      </div>
      <div className="relative h-[309px] my-3 bg-cropperBg">
        <ImageCropper
          deleteImg={deleteImg}
          setDeleteImg={setDeleteImg}
          saveCroppedImage={showCroppedImage}
          setShowCroppedImage={setShowCroppedImage}
        />
      </div>
      <div className="bg-redPrimery">
        <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
          <BiZoomOut size={25} />
        </button>
        sleider
        <button className="border-2 border-gray rounded-md active:bg-braunPrimery">
          <BiZoomIn size={25} />
        </button>
      </div>
      <div className="flex justify-between mt-6 px-14">
        <button
          onClick={() => setDeleteImg(true)}
          className="px-[20px] py-[4px] border-[3px] border-redPrimery rounded-md font-bold text-text active:bg-redPrimery active:text-whiteText"
        >
          Löschen
        </button>
        <button
          onClick={saveBtn}
          className="px-[20px] py-[4px] border-[3px] border-bgreenPrimery rounded-md font-bold text-text active:bg-bgreenPrimery active:text-whiteText"
        >
          Speichern
        </button>
      </div>
    </div>
  );
};

export default CropperDialog;
