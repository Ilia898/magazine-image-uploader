import imgPages from "../assets/magazinpage/imagePages.json";
import image1 from "../assets/magazinpage/images";

function MagazinPages() {
  console.log(imgPages);
  return (
    <div>
      <div>
        <img src={imgPages[0]} alt="" />
      </div>
    </div>
  );
}

export default MagazinPages;
