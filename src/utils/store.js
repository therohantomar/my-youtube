import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
        search:searchSlice,
        video:videoSlice,
        chat:chatSlice
    }
})

export default store;