import { createSlice } from "@reduxjs/toolkit";

const chatSlice=createSlice({
    name:"chat",
    initialState:{
        message:[]
    },
    reducers:{
        addMessages:(state,action)=>{
            if(state.message.length>24){
                state.message.pop()
            }
            state.message.unshift(action.payload)
        }
    }
})

export const {addMessages} =chatSlice.actions
export default chatSlice.reducer