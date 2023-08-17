import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import {FaBell} from "react-icons/fa"
import logo from "../utils/images/Youtube-Logo-PNG-1.png";

const Header = () => {
  return (
    <div className="grid grid-flow-col bg-white fixed top-0 w-full z-10   p-4">
      <div className="col-span-1 flex">
        <RxHamburgerMenu className="h-6 w-8 mx-2" />
        <img src={logo} alt="Youtubelogo"  className="w-28 mx-2 h-6" />
      </div>
      <div className="col-span-10 mx-16 flex">
      <input type="text"  className="w-2/3 border outline-none px-6 border-gray-300 rounded-l-full"/>
        <button className="rounded-r-full w-12 p-2   cursor-pointer bg-gray-100 border border-gray-300 ">
          <BiSearch  className="mx-2"  />
        </button>
      </div>
      <div className="col-span-1 cursor-pointer flex">
        <FaBell className="mx-6"/>
        <BiUser/>
      </div>
    </div>
  );
};

export default Header;
