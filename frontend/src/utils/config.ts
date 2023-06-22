export interface cropperChildrenType {
    children: React.ReactNode;
  }

export interface cropperContextType{
  croppedImgUrl: string | null;
  setCroppedImgUrl: React.Dispatch<React.SetStateAction<string | null>>;
}