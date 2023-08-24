import React, { useState } from "react";
import Commentlist from "./Commentlist";
import { CommentsData } from "../utils/constants";
import { IoIosArrowDropup } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";


const CommentsContainer = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="w-full gap-4 h-96">
      <span className="flex items-center gap-2 text-xl">
        <h1 className="font-semibold text-md my-2"> Comments</h1>
        {isVisible ? (
          <IoIosArrowDropdown onClick={() => setIsVisible(false)} />
        ) : (
          <IoIosArrowDropup onClick={() => setIsVisible(true)} />
        )}
      </span>
      {isVisible ? <Commentlist CommentsData={CommentsData} /> : null}
    </div>
  );
};

export default CommentsContainer;
