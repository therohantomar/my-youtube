import React from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const AutoCompleteBar = ({
  queryContent,
  setSearchQuery,
  setShowSuggestions,
}) => {
  return (
    <div>
      {" "}
      <Link to={`results?search=${queryContent}`}>
        <div
          onClick={() => {
            setSearchQuery(queryContent);
            setShowSuggestions(false);
          }}
          className=" mx-8 text-md text-gray-600 flex gap-2 items-center hover:bg-gray-200  bg-white cursor-pointer py-2  2xl:w-full xl:w-5/6 lg:w-40 md:w-40 sm:w-40 xs:w-40"
        >
          <BiSearch className="text-gray-400" />
          <h1> {queryContent}</h1>
        </div>
      </Link>
    </div>
  );
};

export default AutoCompleteBar;
