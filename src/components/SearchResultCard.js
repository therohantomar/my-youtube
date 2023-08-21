import React from "react";
import { Link } from "react-router-dom";

const SearchResultCard = ({ video }) => {
  const { snippet, id } = video;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <>
      {" "}
      {id?.channelId ? (
        <div className="flex ">
          <Link to={"watch?v=" + id.channelId}>
            <img
              className="w-full h-48  rounded-full"
              src={thumbnails?.default?.url}
              alt={title}
            />
          </Link>
          <span className="flex flex-col gap-2">
            <p className="font-semibold font-sans h-12 my-2 overflow-hidden text-md">
              {title}
            </p>
            <p className="text-sm my-2 text-gray-600">{channelTitle}</p>
          </span>
        </div>
      ) : (
        <div className="flex">
          <img
            className="w-96 h-48  rounded-lg"
            src={thumbnails?.medium?.url}
            alt={title}
          />
          <span className="flex flex-col">
            <p className="font-semibold font-sans h-12 my-2 overflow-hidden text-md">
              {title}
            </p>
            <p className="text-sm my-2 text-gray-600">{channelTitle}</p>
          </span>
        </div>
      )}
    </>
  );
};

export default SearchResultCard;
