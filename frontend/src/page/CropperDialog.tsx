import React, { useContext, useState } from "react";
import ImageCropper from "../components/ImageCropper";
import { CropperContext } from "../context/cropperContext";
import Slider from "@mui/material/Slider";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
  const {
    setIsDialogVisible,
    setShowCroppedImage,
    setDeleteImg,
    setZoom,
    zoom,
  } = useContext(CropperContext);

  const saveBtn = () => {
    setShowCroppedImage(true);
    setIsDialogVisible(false);
  };

  const handleChange = (_event: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      setZoom(newValue);
    }
  };

  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#EA512E", // Replace #YOUR_COLOR with the color you want.
      },
    },
  });

  return (
    <div className="w-[550px] h-[600px] bg-whiteText rounded-lg">
      <div className="flex px-4 py-4 justify-end">
        <button onClick={() => setIsDialogVisible(false)}>
          <BiX size={37} />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="w-[220px] flex justify-between">
          <button className="w-[40px] h-[40px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none">
            <BiLeftArrowAlt size={25} />
          </button>
          <button className="w-[40px] h-[40px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none">
            <BiRightArrowAlt size={25} />
          </button>
          <button className="w-[40px] h-[40px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none">
            <BiDownArrowAlt size={25} />
          </button>
          <button className="w-[40px] h-[40px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none">
            <BiUpArrowAlt size={25} />
          </button>
          <button
            onClick={() => setZoom(1)}
            className="w-[40px] h-[40px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none"
          >
            <BiExpand size={25} />
          </button>
        </div>
      </div>
      <div className="relative h-[309px] my-3 bg-cropperBg">
        <ImageCropper />
      </div>
      <div className="flex w-3/4 h-[35px] mx-auto my-7">
        <button
          onClick={() => setZoom((zoom) => Math.max(zoom - 1, 1))}
          className="mr-7 w-[37px] h-[37px]  border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none"
        >
          <BiZoomOut size={25} />
        </button>
        <ThemeProvider theme={customTheme}>
          <Slider
            value={zoom}
            min={1}
            step={1}
            max={30}
            onChange={handleChange}
          />
        </ThemeProvider>
        <button
          onClick={() => setZoom(zoom + 1)}
          className="ml-7 w-[37px] h-[37px] border-2 shadow-[0px_1.5px_0.5px_rgba(0,0,0,0.25)] border-bgreenPrimery rounded-md font-bold p-1 hover:shadow-none"
        >
          <BiZoomIn size={25} />
        </button>
      </div>
      <div className="flex justify-between mt-6 px-14">
        <button
          onClick={() => setDeleteImg(true)}
          className="px-[20px] py-[4px]  border-b-2 border-text rounded-md font-bold text-whiteText p-1 bg-braunPrimery hover:border-none"
        >
          Löschen
        </button>
        <button
          onClick={saveBtn}
          className="px-[20px] py-[4px] border-b-2 border-text rounded-md font-bold text-whiteText p-1 bg-bgreenPrimery hover:border-none"
        >
          Speichern
        </button>
      </div>
    </div>
  );
};

export default CropperDialog;
