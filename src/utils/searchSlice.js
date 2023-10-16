import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    suggestions: {},
  },
  reducers: {
    cacheResults: (state, action) => {

      if (state.suggestions.length > 4) {
        const ObjectEntries=Object.entries(state.suggestions)
        ObjectEntries.pop()
        const newObj=ObjectEntries.fromEntries()
        state.suggestions=newObj
      }
      const newObj = { ...state.suggestions, ...action.payload };
      state.suggestions = newObj;
    },
  },
});

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;
