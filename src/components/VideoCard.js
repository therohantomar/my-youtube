import { Link } from "react-router-dom";
import { toggleSidebar } from "../utils/helper";
import { isMenu } from "../utils/toggleSlice";
import { useDispatch } from "react-redux";
import { numify } from "numify";

const VideoCard = ({ item }) => {
  const dispatch = useDispatch();
  const { snippet, statistics, id } = item;
  const { thumbnails, title, channelTitle } = snippet;
  const { viewCount } = statistics;

  return (
    <div className="w-80   cursor-pointer h-max ">
      <Link to={"watch?v=" + id}>
        <img
          onClick={() => toggleSidebar(dispatch, isMenu)}
          className="w-full h-48 hover:rounded-none rounded-lg"
          src={thumbnails?.medium?.url}
          alt={title}
        />
      </Link>
      <>
        <p className="font-semibold font-sans h-12 my-2 overflow-hidden text-md">{title}</p>
        <p className="text-sm my-2 text-gray-600">{channelTitle}</p>
        <h2 className="text-sm my-2 text-gray-500">{numify(viewCount)} views.</h2>
      </>
    </div>
  );
};

export default VideoCard;
