import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ButtonSave } from "../components/ButtonsComponent";
import { useState } from "react";
import MagazinPages from "../components/MagazinPages";

interface MagazinProps {
  openButtonClick: () => void;
}

const Magazin: React.FC<MagazinProps> = ({ openButtonClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: 60 }, (_, i) => i + 1);

  const clickButton = () => {
    openButtonClick;
  };

  return (
    <>
      <div className="w-4/5">
        <div className="flex justify-between my-4">
          <div className="flex items-center text-lg cursor-pointer">
            <BiArrowBack size={22} />
            Back to Product Page
          </div>
          <div className="cursor-pointer">
            <ButtonSave />
          </div>
        </div>
        <div className="flex h-[408px] justify-center items-center rounded-lg bg-gray">
          <MagazinPages pageNumber={currentPage} openButtonTrue={clickButton} />
        </div>
        <div className="flex mt-4 space-x-4">
          <div>
            <div
              className="h-auto cursor-pointer p-2 active:bg-braunPrimery"
              onClick={() =>
                setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
              }
            >
              <BiChevronLeft size={40} />
            </div>
          </div>
          <div className="w-11/12 text-xl font-medium mr-3 bg-garylight">
            {pages.map((pageNumber) => (
              <button
                className="p-2 active:bg-braunPrimery"
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
          <div>
            <div
              className="cursor-pointer p-2 active:bg-braunPrimery"
              onClick={() =>
                setCurrentPage((prevPage) =>
                  Math.min(prevPage + 1, pages.length)
                )
              }
            >
              <BiChevronRight size={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Magazin;
