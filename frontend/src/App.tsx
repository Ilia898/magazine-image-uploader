import { useState } from "react";
import CropperDialog from "./page/CropperDialog";
import Magazin from "./page/Magazin";

function App() {
  const [isDialogVisible, setIsDialogVisible] = useState(false);

  const openButtonClick = () => {
    setIsDialogVisible(true);
  };

  const closeButtonClick = () => {
    setIsDialogVisible(false);
  };

  return (
    <>
      <div className="overflow-hidden bg-editor-back">
        <div>
          <div className="w-96 h-96 -mt-48 ml-auto -mr-44 bg-bgreenPrimery rounded-full"></div>
        </div>
        <div className="flex -mt-32 justify-center items-center">
          <Magazin openButtonClick={openButtonClick} />
        </div>
        <div>
          <div className="w-96 h-96 -mb-44 -ml-44 mr-0 bg-yellowPrimery rounded-full"></div>
        </div>
      </div>
      {isDialogVisible && (
        <div>
          <CropperDialog />
        </div>
      )}
    </>
  );
}

export default App;
