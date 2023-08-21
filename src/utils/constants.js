export const Buttonlistdata = [
  "All",
  "News",
  "Comedy",
  "Sports",
  "Music",
  "Celebrity",
  "Movies",
  "Mix",
  "Health",
  "Fitness",
  "Yoga",
  "Facts",
  "Hacking",
  "Horror",
  "Tourism",
  "Tourism",
  "Tourism",
];
export const YOUTUBE_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=`;
export const YOUTUBE_AUTOCOMPLETE_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
export const YOUTUBE_SEARCH_API= `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=${process.env.REACT_APP_APIKEY}&order=relevance&q=`
