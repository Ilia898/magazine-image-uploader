export interface cropperChildrenType {
    children: React.ReactNode;
}
export interface CroppedArea {
  x: number;
  y: number;
  width: number;
  height: number;
}


export interface cropperContextType{
  croppedImgUrl: string | null;
  setCroppedImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
  isDialogVisible:boolean
  setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  showCroppedImage: boolean;
  setShowCroppedImage: React.Dispatch<React.SetStateAction<boolean>>;
  deleteImg: boolean;
  setDeleteImg: React.Dispatch<React.SetStateAction<boolean>>;
  zoom: number;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
  cropImg: {x: number, y: number};
  setCropImg: React.Dispatch<React.SetStateAction<{ x: number, y: number }>>;
  imageSrc: string | null;
  setImageSrc: React.Dispatch<React.SetStateAction<string | null>>;
  croppedAreaPixels: CroppedArea | null;
  setCroppedAreaPixels: React.Dispatch<React.SetStateAction<CroppedArea | null>>
  croppedImage: string | null;
  setCroppedImage: React.Dispatch<React.SetStateAction<string | null>>;
  imgId: number | null;
  setImgId: React.Dispatch<React.SetStateAction<number | null>>;
}