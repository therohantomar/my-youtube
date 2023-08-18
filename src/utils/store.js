import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./toggleSlice";

const store=configureStore({
    reducer:{
        toggle:toggleSlice,
    }
})

export default store;