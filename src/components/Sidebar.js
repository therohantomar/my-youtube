import { BsCollectionPlay } from "react-icons/bs";
import YoutubeShorts from "../utils/images/youtube-shorts-logo-15252.png";
import { MdOutlineLibraryAddCheck } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { PiHouseBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { isMenu } from "../utils/toggleSlice";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((store) => store.toggle.isOpen);
  const dispatch=useDispatch()
  const [searchParams] = useSearchParams();
  const id = searchParams?.get("v");


  if (!isOpen)
    return (
      <div className=" flex-col xs:hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:flex items-center justify-between w-14 h-full ml-4 transition duration-500">
        <ul className="flex flex-col items-center justify-evenly px-2 h-60">
          <Link to="/">
            <li   className="flex flex-col items-center    cursor-pointer   hover:bg-gray-200 justify-center ">
              <PiHouseBold className="text-2xl my-2" />
              <h1 className="text-xs">Home</h1>
            </li>
          </Link>
          <li className="flex flex-col items-center  cursor-pointer    hover:bg-gray-200 justify-center ">
            <img
              src={YoutubeShorts}
              className=" my-2 text-2xl"
              alt="youtube shots"
            />
            <h1 className="text-xs">Shots</h1>
          </li>
          <li className="flex flex-col items-center  cursor-pointer    hover:bg-gray-200 justify-center ">
            <BsCollectionPlay className="my-2 text-2xl" />
            <h1 className="text-xs">Subscriptions</h1>
          </li>
        </ul>
      </div>
    );

  return (
    <div data-testId="sidebar_Opened"
      className={
        id
          ? "absolute z-20 bg-white top-16 bottom-0  overflow-y-scroll scrollbar-hide -moz-scrollbar-none left-0 transition duration-500"
          : "w-60 shadow-xl xs:absolute sm:absolute  md:absolute lg:static xl:static 2xl:static bg-white  z-20 bottom-0 left-0 top-12  transition duration-500"
      }
    >
      <>
        <ul className="w-full">
          <Link to="/">
            <li  onClick={() =>dispatch(isMenu())} className="flex  items-center text-md  cursor-pointer gap-2   hover:bg-gray-200  p-3">
              <PiHouseBold className=" mr-6 text-xl" />
              Home
            </li>
          </Link>
          <li className="flex  items-center text-md cursor-pointer  gap-2 hover:bg-gray-200  p-3">
            <img
              src={YoutubeShorts}
              className="mr-6 text-xl"
              alt="youtube shots"
            />
            Shorts
          </li>
          <li className="flex  items-center text-md cursor-pointer  gap-2 hover:bg-gray-200  p-3">
            <BsCollectionPlay className="mr-6 text-xl" />
            Subscriptions
          </li>
        </ul>
      </>

      <ul className="flex flex-col border-t border-gray-300 mt-10 ">
        <li className="flex items-center gap-2  text-md  hover:bg-gray-200 p-3">
          <MdOutlineLibraryAddCheck className="mr-6 text-xl" />
          Library
        </li>
        <li className="flex  items-center text-md gap-2    cursor-pointer hover:bg-gray-200  p-3">
          <GrHistory className="mr-6 text-xl" />
          history
        </li>
        <li className="flex  items-center text-md cursor-pointer gap-2  hover:bg-gray-200 p-3">
          <AiOutlinePlaySquare className="mr-6 text-xl" />
          Your Videos
        </li>
        <li className="flex  items-center text-md cursor-pointer  gap-2  hover:bg-gray-200  p-3">
          <BsStopwatch className="mr-6 text-xl" />
          Watch Later
        </li>
        <li className="flex  items-center text-md cursor-pointer   hover:bg-gray-200  p-3">
          <AiOutlineLike className="mr-6 text-xl" />
          Liked videos
        </li>
      </ul>

      <ul className="flex flex-col border-t border-gray-300 mt-10 ">
        <li className="flex items-center gap-2  text-md  hover:bg-gray-200 p-3">
          <MdOutlineLibraryAddCheck className="mr-6 text-xl" />
          Library
        </li>
        <li className="flex  items-center text-md gap-2    cursor-pointer hover:bg-gray-200  p-3">
          <GrHistory className="mr-6 text-xl" />
          history
        </li>
        <li className="flex  items-center text-md cursor-pointer gap-2  hover:bg-gray-200 p-3">
          <AiOutlinePlaySquare className="mr-6 text-xl" />
          Your Videos
        </li>
        <li className="flex  items-center text-md cursor-pointer  gap-2  hover:bg-gray-200  p-3">
          <BsStopwatch className="mr-6 text-xl" />
          Watch Later
        </li>
        <li className="flex  items-center text-md cursor-pointer   hover:bg-gray-200  p-3">
          <AiOutlineLike className="mr-6 text-xl" />
          Liked videos
        </li>
      </ul>
      
    </div>
  );
};

export default Sidebar;
