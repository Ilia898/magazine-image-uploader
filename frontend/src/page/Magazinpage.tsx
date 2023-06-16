import { BiArrowBack, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { ButtonSave } from "../components/ButtonsComponent";
import { useState } from "react";

function Magazinpage() {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Array.from({ length: 60 }, (_, i) => i + 1);

  return (
    <div className="w-3/5">
      <div className="flex items-center">
        <BiArrowBack />
        Back to Product Page
      </div>
      <div className="f">
        <ButtonSave />
      </div>
      <div className="h-[510px] bg-gray"></div>
      <div className="flex place-content-between bg-whiteText">
        <div className="">
          <BiChevronLeft size={40} />
        </div>

        <div className="w-10/12 text-xl font-medium space-x-4">
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
          <BiChevronRight size={40} />
        </div>
      </div>
    </div>
  );
}

export default Magazinpage;
