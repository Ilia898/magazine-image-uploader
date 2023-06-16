import Magazinpage from "./page/Magazinpage";

function App() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden bg-editor-back">
        <div className="w-96 h-96 -mt-44 ml-auto -mr-44 bg-bgreenPrimery rounded-full"></div>
        <div className="flex -mt-20 justify-center items-center">
          <Magazinpage />
        </div>
        <div className="w-96 h-96 -ml-44 mr-0 bg-yellowPrimery rounded-full"></div>
      </div>
    </>
  );
}

export default App;
