import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
        search:searchSlice,
        video:videoSlice
    }
})

export default store;