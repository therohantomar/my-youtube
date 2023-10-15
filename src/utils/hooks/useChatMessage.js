import { useDispatch } from "react-redux"
import { addMessages } from "../chatSlice"
import { useEffect } from "react";
import { generate } from "../helper";
import { generateRandomTextWithEmoji } from "../helper";
const useChatMessage=()=>{
    const dispatch=useDispatch()

    useEffect(()=>{
        const i=setInterval(()=>{
                dispatch(addMessages({name:generate(),message:generateRandomTextWithEmoji()}))
        },1500)
        return ()=>{
            clearInterval(i)
        }
    })



}


export default useChatMessage