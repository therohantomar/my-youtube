import React from "react";
import { Link } from "react-router-dom";
import SubscribeButton from "./SubscribeButton";

const SearchResultCard = ({ video }) => {
  const { snippet, id } = video;
  const { thumbnails, title, channelTitle } = snippet;

  return (
    <>
      {" "}
      {id?.channelId ? (
        <div className="flex gap-4">
            <img
              className="xl:w-40 xl:h-40 xs:w-20 xs:h-20 sm:w-28 sm:h-28 md:w-30 md:h-30 lg:w-32 lg:h-32 rounded-full"
              src={thumbnails?.default?.url}
              alt={title}
            />
          <span className="flex flex-col gap-2">
            <p className="font-semibold font-sans   h-max  flex flex-wrap my-2 overflow-hidden text-md">
              {title}
            </p>
            <p className="text-sm my-2 text-gray-600">@{channelTitle}</p>
            <SubscribeButton/>
          </span>
        </div>
      ) : (
        <div className="flex gap-4 w-max  cursor-pointer">
        <Link to={"/watch?v=" + id.videoId}>
          <img
            className="xl:w-80 xl:h-40 xs:w-28 xs:h-20 sm:w-34 sm:h-28 md:w-40 md:h-30 lg:w-56 lg:h-32 rounded-lg"
            src={thumbnails?.medium?.url}
            alt={title}
          /></Link>
          <span className="flex flex-col flex-wrap min-w-max min-h-max ">
            <p className="font-semibold w-3/4  h-max  font-sans  my-2 overflow-hidden text-md">
              {title}
            </p>
            <p className="text-sm my-2 text-gray-600">@{channelTitle}</p>
            <SubscribeButton/>
            </span>
        </div>

      )}
    </>
  );
};

export default SearchResultCard;
