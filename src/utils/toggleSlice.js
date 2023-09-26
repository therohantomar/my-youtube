import { createSlice } from "@reduxjs/toolkit";

const toggleSlice=createSlice({
    name:"toggle",
    initialState:{
        isOpen:true,
    },
    reducers:{
        closeMenu:(state)=>{
            state.isOpen=!state.isOpen
        },
        isMenu:(state)=>{
            state.isOpen=false
            
        }
    }
})

export const {closeMenu,isMenu} =toggleSlice.actions;
export default toggleSlice.reducer
