import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { YOUTUBE_AUTOCOMPLETE_API } from "../constants";
import { cacheResults } from "../searchSlice";

const useAutoSuggestion = (searchQuery) => {
  const dispatch = useDispatch();
  const searchSuggestions = useSelector((store) => store.search.suggestions);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchSuggestions[searchQuery]) {
        setSuggestions(searchSuggestions[searchQuery]);
      } else {
        getSuggestionsQuery();
      }
    }, 250);
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  async function getSuggestionsQuery() {
    try {
      const data = await fetch(YOUTUBE_AUTOCOMPLETE_API + searchQuery);
      const Queries = await data.json();
      setSuggestions(Queries[1]);
      dispatch(
        cacheResults({
          [searchQuery]: Queries[1],
        })
      );
    } catch {
      console.error("Connectivity issue !!");
    }
  }

  return suggestions;
};

export default useAutoSuggestion;
