import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";
import searchSlice from "./searchSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
        search:searchSlice,
    }
})

export default store;