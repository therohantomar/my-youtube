import Buttonlist from "./Buttonlist";
import useVideos from "../utils/hooks/useVideos";
import VideoCard from "./VideoCard";
import ShimmerCard from "./ShimmerCard";
const VideosContainer = () => {
  const videos = useVideos();
  //early return
  if (videos.length === 0)
    return (
      <div  className="flex flex-wrap h-screen overflow-y-scroll scrollbar-hide gap-4">{
        new Array(20).fill(" ").map((_,index)=>{
          return <ShimmerCard key={index}/>
        })
      }
      </div>
    );

  return (
    <div className=" flex flex-col h-screen pb-20   overflow-y-scroll scrollbar-hide overflow-x-hidden ">
      <Buttonlist />

      <div className="flex flex-wrap overflow-y-scroll scrollbar-hide cursor-pointer h-screen  gap-4 mt-3">
        {videos.map((item) => {
          return <VideoCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default VideosContainer;
