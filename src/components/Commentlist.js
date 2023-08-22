import React from "react";
import Comment from "./Comment";
const Commentlist = ({ CommentsData }) => {

  return (
    <div className="flex flex-col">
    <span className="mx-2">
      {CommentsData?.map((Commentdata) => {
        return <Comment comment={Commentdata} />;
      })}</span>
      
    </div>
  );
};

export default Commentlist;
