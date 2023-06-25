import { createContext, useEffect, useState } from "react";
import { cropperContextType, cropperChildrenType } from "../utils/config";

export const CropperContext = createContext<cropperContextType>({
  croppedImgUrl: null,
  setCroppedImgUrl: () => {
    null;
  },
  isDialogVisible: false,
  setIsDialogVisible: () => {
    false;
  },
  currentPage: 1,
  setCurrentPage: () => {
    1;
  },
  showCroppedImage: false,
  setShowCroppedImage: () => {
    false;
  },
  deleteImg: false,
  setDeleteImg: () => {
    false;
  },
  zoom: 1,
  setZoom: () => {
    1;
  },
});

export function CropperContextProvider({ children }: cropperChildrenType) {
  const [croppedImgUrl, setCroppedImgUrl] = useState<string | null>(null);
  const [showCroppedImage, setShowCroppedImage] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteImg, setDeleteImg] = useState(false);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    console.log("esaris  :", croppedImgUrl);
  }, [croppedImgUrl]);
  return (
    <CropperContext.Provider
      value={{
        croppedImgUrl,
        setCroppedImgUrl,
        isDialogVisible,
        setIsDialogVisible,
        currentPage,
        setCurrentPage,
        showCroppedImage,
        setShowCroppedImage,
        deleteImg,
        setDeleteImg,
        zoom,
        setZoom,
      }}
    >
      {children}
    </CropperContext.Provider>
  );
}
