import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import logo from "../utils/images/Youtube-Logo-PNG-1.png";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/toggleSlice";
import { toggleSidebar } from "../utils/helper";
const Header = () => {
  const dispatch = useDispatch();

  return (
    <nav className="grid grid-flow-col bg-white  w-full z-10   p-4">
      <span className="col-span-1 flex">
        <RxHamburgerMenu
          onClick={() => toggleSidebar(dispatch, closeMenu)}
          className="h-8 cursor-pointer hover:bg-gray-200 px-2 rounded-sm w-10 mx-2"
        />
        <img src={logo} alt="Youtubelogo" className="w-28 mx-2 h-6" />
      </span>
      <span className="col-span-10 mx-16 flex">
        <input
          type="text"
          className="w-2/3 border outline-none px-6 border-gray-300 rounded-l-full"
        />
        <button className="rounded-r-full w-12 p-2   cursor-pointer bg-gray-100 border border-gray-300 ">
          <BiSearch className="mx-2" />
        </button>
      </span>
      <span className="col-span-1 cursor-pointer flex">
        <FaBell className="mx-6" />
        <BiUser />
      </span>
    </nav>
  );
};

export default Header;
