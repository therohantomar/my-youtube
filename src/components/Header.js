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


const Header = () => {
  const [searchQuery,setSearchQuery]=useState(" ")
  const Queries=useAutoSuggestion(searchQuery)
  const dispatch = useDispatch();
   console.log(Queries[1])

  return (
    <nav className="grid grid-flow-col bg-white  w-full z-10   p-4">
      <span className="col-span-1 flex items-center">
        <RxHamburgerMenu
          onClick={() => toggleSidebar(dispatch, closeMenu)}
          className="h-8 cursor-pointer hover:bg-gray-200 px-2 rounded-sm w-10 mx-2"
        />
        <img src={`https://www.gstatic.com/youtube/img/promos/growth/b5bebe6c7c48dddb2fb8c605559aac17ebbb1cbb5d3119342d54a830a9a2bbb2_244x112.webp`} alt="Youtubelogo" className=" mx-2 w-32 h-14" />
      </span>
      <span className="col-span-10 mx-16 flex">
      <span className="flex flex-col w-2/3">
        <input
          type="text"
          placeholder="search"
          className="w-full border outline-inherit px-6 text-md  h-10 border-gray-300 rounded-l-full"
          value={searchQuery}
          onChange={(e)=>handleSearchQuery(e,setSearchQuery)}
          />
          <div className="h-max fixed bg-white top-16 rounded-xl shadow-lg  w-96">
        {Queries.length!==0?Queries[1]?.map(query=>{
          return <AutoCompleteBar queryContent={query}/>
        }):null}
        </div>
        </span>
       
        <button className="rounded-r-full      p-2  h-10  cursor-pointer bg-gray-100 border border-gray-300 ">
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
