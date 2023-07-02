import { createContext, useEffect, useState } from "react";
import axios from "axios";
import {
  cropperContextType,
  cropperChildrenType,
  CroppedArea,
} from "../utils/config";

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
  cropImg: { x: 0, y: 0 },
  setCropImg: () => ({ x: 0, y: 0 }),
  imageSrc: null,
  setImageSrc: () => {
    null;
  },
  croppedAreaPixels: null,
  setCroppedAreaPixels: () => {
    null;
  },
  croppedImage: null,
  setCroppedImage: () => {
    null;
  },

  imgId: null,
  setImgId: () => {
    null;
  },
});

export function CropperContextProvider({ children }: cropperChildrenType) {
  const [croppedImgUrl, setCroppedImgUrl] = useState<string | null>(null);
  const [showCroppedImage, setShowCroppedImage] = useState(false);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteImg, setDeleteImg] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [cropImg, setCropImg] = useState({ x: 0, y: 0 });
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<CroppedArea | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null>(null);
  const [imgId, setImgId] = useState<number | null>(null);

  useEffect(() => {
    axios
      .post("/user/upload/image", {
        currentPage,
        imgId,
        croppedImgUrl,
      })
      .then((response) => {
        console.log("Data uploaded successfully:", response.data);
      })
      .catch((error) => {
        console.log("Error in uploading data:", error);
      });
    console.log(
      "gverdi :",
      currentPage,
      " suratis iD :",
      imgId,
      " url-blob :",
      croppedImgUrl
    );
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
        cropImg,
        setCropImg,
        imageSrc,
        setImageSrc,
        croppedAreaPixels,
        setCroppedAreaPixels,
        croppedImage,
        setCroppedImage,
        imgId,
        setImgId,
      }}
    >
      {children}
    </CropperContext.Provider>
  );
}
