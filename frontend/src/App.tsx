import Magazin from "./page/Magazin";
import { CropperContextProvider } from "./context/cropperContext";

function App() {
  return (
    <>
      <CropperContextProvider>
        <div className="relative overflow-hidden bg-editor-back">
          <div>
            <div className="w-96 h-96 -mt-48 ml-auto -mr-44 bg-bgreenPrimery rounded-full"></div>
          </div>
          <div className="flex -mt-32 justify-center items-center">
            <Magazin />
          </div>
          <div>
            <div className="w-96 h-96 -mb-44 -ml-44 mr-0 bg-yellowPrimery rounded-full"></div>
          </div>
        </div>
      </CropperContextProvider>
    </>
  );
}

export default App;
