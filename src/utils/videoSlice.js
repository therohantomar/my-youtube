import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        videoItems:[]
    },
    reducers:{
        addVideo:(state,action)=>{
            state.videoItems.push(action.payload)
        }
    }
})

export const {addVideo}=videoSlice.actions
export default videoSlice.reducer