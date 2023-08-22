import { useSearchParams } from "react-router-dom";
import VideosContainer from "./VideosContainer";
import {BiUserCircle} from "react-icons/bi"
import SubscribeButton from "./SubscribeButton"

const Watchpage = () => {
  const [searchParams]  = useSearchParams();
  const id=searchParams.get("v")
  
  return (
    <div className=" flex  gap-4 h-screen w-full  pb-20 ">
    <div className=" flex flex-col overflow-y-scroll gap-4 h-screen scrollbar-hide -moz-scrollbar-none w-max p-2 border-2  pb-20 ">
      <iframe
        className="xl:w-[58rem] lg:w-[38rem] md:w-[32rem] sm:w-[24rem] xs:h-[12rem] sm:h-[16rem] md:h-[20rem] lg:h-[22rem] xl:h-[32rem] "
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        allowTransparency
        autoPlay
      ></iframe>
      <span className="flex items-center  h-30  gap-4">
      <BiUserCircle className="w-12 text-gray-300 h-10"/>
      <span>
      <p>Channel name here..............</p>
      <SubscribeButton/>
      </span>
      </span>     </div>
      <div className="w-3/12">
        <VideosContainer/>
      </div>
    </div>
  );
};

export default Watchpage;
