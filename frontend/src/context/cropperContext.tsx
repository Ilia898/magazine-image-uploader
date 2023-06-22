import { createContext, useEffect, useState } from "react";
import { cropperContextType, cropperChildrenType } from "../utils/config";

export const CropperContext = createContext<cropperContextType>({
  croppedImgUrl: null,
  setCroppedImgUrl: () => {
    null;
  },
});

export function CropperContextProvider({ children }: cropperChildrenType) {
  const [croppedImgUrl, setCroppedImgUrl] = useState<string | null>(null);

  useEffect(() => {
    console.log("esaris  :", croppedImgUrl);
  }, [croppedImgUrl]);
  return (
    <CropperContext.Provider
      value={{
        croppedImgUrl,
        setCroppedImgUrl,
      }}
    >
      {children}
    </CropperContext.Provider>
  );
}
