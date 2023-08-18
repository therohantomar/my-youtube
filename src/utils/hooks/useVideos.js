import { YOUTUBE_URL } from "../constants";
import { useState, useEffect } from "react";

function useVideos() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideo();
  }, []);

  async function getVideo() {
    try {
      const res = await fetch(YOUTUBE_URL + process.env.REACT_APP_APIKEY);
      const data = await res.json();
      setVideos(data?.items);
    } catch {
      console.error("something went wrong !!");
    }
  }
  return videos;
}

export default useVideos;
