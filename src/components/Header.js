import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/toggleSlice";
import { toggleSidebar } from "../utils/helper";
import { handleSearchQuery } from "../utils/helper";
import useAutoSuggestion from "../utils/hooks/useAutoSuggestion";
import AutoCompleteBar from "./AutoCompleteBar";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(" ");
  const [showSuggestions,setShowSuggestions]=useState(true)
  const suggestions = useAutoSuggestion(searchQuery);
  const dispatch = useDispatch();


  return (
    <nav className="grid grid-flow-col bg-white  w-full z-10   p-4">
      <span className="col-span-1 xs:col-span-2 flex items-center gap-2">
        <RxHamburgerMenu
          onClick={() => toggleSidebar(dispatch, closeMenu)}
          className="h-8 cursor-pointer  hover:bg-gray-200 xs:w-8 xs:h-8 rounded-sm w-10  mx-2"
        />
        <img
          src={`https://www.gstatic.com/youtube/img/promos/growth/b5bebe6c7c48dddb2fb8c605559aac17ebbb1cbb5d3119342d54a830a9a2bbb2_244x112.webp`}
          alt="Youtubelogo"
          className=" mx-2 xs:w-24  xs:h-12 xl:w-30 xl:h-14"
        />
      </span>
      <span  className="col-span-11 xs:col-span-8  mx-16 flex items-center justify-center" >
        <span className="flex flex-col w-2/3">
          <input
            type="text"
            placeholder="search..."
            className="w-full border outline-inherit px-6 text-md xs:h-8 h-10 border-gray-300 rounded-l-full"
            value={searchQuery}
            onChange={(e) => handleSearchQuery(e, setSearchQuery)}
            onFocus={()=>setShowSuggestions(true)}
            // onBlur={()=>setShowSuggestions(false)}
          />{ showSuggestions?
          <div  onBlur={()=>setShowSuggestions(false)} className="h-max fixed bg-white top-16 rounded-3xl  shadow-xl  w-[37rem] transition duration-300">
  
            {suggestions.length !== 0
              ? suggestions?.map((query,index) => {
                
                  return <AutoCompleteBar key={index} queryContent={query} setSearchQuery={setSearchQuery} setShowSuggestions={setShowSuggestions} />;
                })
              : null}
          </div>:null}
        </span>

       <Link to={`results?search=${searchQuery}`}><button className="rounded-r-full  p-2  xs:h-8 h-10  cursor-pointer bg-gray-100 border-2 border-gray-300 ">
          <BiSearch className="mx-2" />
        </button></Link>
      </span>

      <span className="col-span-1 xs:col-span-2 cursor-pointer flex items-center justify-center">
        <FaBell className="mx-6" />
        <BiUser />
      </span>
    </nav>
  );
};

export default Header;
