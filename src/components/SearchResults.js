import { useSearchParams } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import useSearchVideos from "../utils/hooks/useSearchVideos";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchkey = searchParams.get("search");
  const videos = useSearchVideos(searchkey);

  if (!videos) return <h1>loading.....</h1>;

  if (videos.length === 0) return <h1>loading.....</h1>;
  return (
    <div>
      <h1>searching results for {searchkey}</h1>
      <div className="h-screen overflow-y-scroll -moz-scrollbar-none scrollbar-hide  pb-56 flex flex-col gap-4">
        {videos?.map((video) => {
          return <SearchResultCard video={video} />;
        })}
      </div>
    </div>
  );
};

export default SearchResults;
