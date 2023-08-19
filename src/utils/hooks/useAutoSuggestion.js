import { useState, useEffect } from "react";
import {YOUTUBE_AUTOCOMPLETE_API} from "../constants"


const useAutoSuggestion=(searchQuery)=>{
    const [Queries,setQueries]=useState([])
  useEffect(()=>{
    const timeoutId=setTimeout(()=>{
      getSuggestionsQuery()
    },250)
    return ()=>{
      clearTimeout(timeoutId)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchQuery])

    async function getSuggestionsQuery(){
      const data=await fetch(YOUTUBE_AUTOCOMPLETE_API+searchQuery)
      const Queries=await data.json() 
      setQueries(Queries)
    }

    return Queries
}

export default useAutoSuggestion