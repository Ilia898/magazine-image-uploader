import React from "react";

interface MagazinPagesProps {
  closeButtonFalse: () => void;
}

const CropperDialog: React.FC<MagazinPagesProps> = ({ closeButtonFalse }) => {
  return <div onClick={closeButtonFalse}>CropperDialog Page</div>;
};

export default CropperDialog;
