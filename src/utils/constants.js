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

export const CommentsData=[
  {
    name:"ashutosh",
    Comment:"hey this video is nice :)",
    replies:[
      {
        name:"xyaz",
        Comment:"whats nice in there !!",

        replies:[
          {
            name:"heyaaa",
            Comment:"this is not so good!",
            replies:[
              

            ]
          }
        ]
      }

    ]
  },
  {
    name:"bhavesh",
    Comment:"hey this video is nice :)",
    replies:[
      {
        name:"xz",
        Comment:"whats nice in there !!",

        replies:[
          {
            name:"heaaa",
            Comment:"this is not so good!",
            replies:[{
              name:"xz",
              Comment:"whats nice in there !!",
            }]
          }
        ]
      }

    ]
  },
  {
    name:"ashok",
    Comment:"hey this video is nice :)",
    replies:[
      {
        name:"xyaz",
        Comment:"whats nice in there !!",

        replies:[
          {
            name:"hekaa",
            Comment:"this is not so good!"
            
          }
        ]
      }

    ]
  },
  {
    name:"visham",
    Comment:"hey this video is nice :)",
    replies:[
      {
        name:"xyaz",
        Comment:"whats nice in there !!",

        replies:[
          {
            name:"heyaaa",
            Comment:"this is not so good!"
            
          }
        ]
      }

    ]
  }
]
