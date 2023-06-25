export interface cropperChildrenType {
    children: React.ReactNode;
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
}