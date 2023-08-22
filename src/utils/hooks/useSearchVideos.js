/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../constants";



const useSearchVideos=(searchkey)=>{
  const [videos, setVideos] = useState([]);

    
  useEffect(() => {
    searchVideos();
  }, [searchkey]);

  async function searchVideos() {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchkey);
      const json = await data.json();
      setVideos(json?.items);
      console.log(json)
    } catch {
      console.error("something went wrong !!");
    }
  }
  return videos
}

export default useSearchVideos;