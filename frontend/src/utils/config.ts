export interface cropperChildrenType {
    children: React.ReactNode;
  }

export interface cropperContextType{
  croppedImgUrl: string | null;
  setCroppedImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
  isDialogVisible:boolean
  setIsDialogVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}