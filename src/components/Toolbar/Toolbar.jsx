import Checkbox from "../../assets/icons/check_box_outline_blank.svg";
import ArrowDown from "../../assets/icons/arrow_drop_down.svg";
import Refresh from "../../assets/icons/refresh.svg";
import More from "../../assets/icons/more_vert.svg";
import ChevronLeft from "../../assets/icons/chevron_left.svg";
import ChevronRight from "../../assets/icons/chevron_right.svg";

const Toolbar = () => {
  return (
    <div className="flex justify-between items-center px-2 py-4">
      <div className="flex items-center ">
        <img src={Checkbox} alt="Checkbox" className="cursor-pointer" />
        <img src={ArrowDown} alt="Arrow Down" className="cursor-pointer" />
        <img src={Refresh} alt="Refresh" className="cursor-pointer ml-6" />
        <img src={More} alt="More" className="cursor-pointer ml-4" />
      </div>
      <div className="flex items-center text-gray-500 space-x-6">
        <span>1-100 of 9,392</span>
        <img src={ChevronLeft} alt="Chevron Left" />
        <img src={ChevronRight} alt="Chevron Right" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Toolbar;
