import { useSearchParams } from "react-router-dom";
import VideosContainer from "./VideosContainer";
import { BiUserCircle } from "react-icons/bi";
import SubscribeButton from "./SubscribeButton";
import { useSelector } from "react-redux";
import { numify } from "numify";
import CommentsContainer from "./CommentsContainer";
import useScrollToTop from "../utils/hooks/useScrollToTop";

const Watchpage = () => {
  const video = useSelector((store) => store?.video?.videoItems);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  useScrollToTop();

  if (!id) return <h1>loading.....</h1>;

  return (
    <>
    <div className=" flex xs:flex-col sm:flex-col overflow-y-scroll scrollbar-hide -moz-scrollbar-none   md:flex-col lg:flex-col xl:flex-row 2xl:flex-row  gap-2 h-max   w-full   ">
      <div className=" flex flex-col  gap-4 h-max  overflow-y-scroll scrollbar-hide -moz-scrollbar-none  pb-32 w-full p-2 border-r-2   ">
        <span className="xl:w-[58rem] my-2 lg:w-[38rem] md:w-[32rem] sm:w-[24rem] xs:h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[22rem] xl:h-[32rem] ">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            allowTransparency
            autoPlay
          ></iframe>
        </span>
        <p className="text-lg font-bold ">{video?.title}</p>
        <p className="text-gray-400">
          {video ? numify(video?.viewCount) : null} views
        </p>
        {/* channel info  */}
        <span className="flex items-center py-2 border-y-2  gap-4">
          <BiUserCircle className="w-12 text-gray-300 h-10" />
          <span className="flex gap-2 items-center justify-between w-full px-2 ">
            <p className="">{video?.channelTitle}</p>
            <SubscribeButton />
          </span>
        </span>{" "}
        <CommentsContainer />
      </div>
      {/* videos rendered  */}
      <span className="w-full h-full">
        <div className="border-2 border-black rounded-lg h-[400px]"></div>
      </span>
    </div>
    
      </>
  );
};

export default Watchpage;
