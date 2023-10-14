import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { addMessages } from "../utils/chatSlice";
import { useEffect } from "react";
import { generate } from "../utils/helper";
import { generateRandomTextWithEmoji } from "../utils/helper";

const LiveComment = () => {
const chatMessage=useSelector(store=>store.chat.message)
const dispatch=useDispatch()

useEffect(()=>{
    const i=setInterval(()=>{
            dispatch(addMessages({name:generate(),message:generateRandomTextWithEmoji()}))
    },1500)
    return ()=>{
        clearInterval(i)
    }
})



  return (
    <div className="border-2 flex flex-col-reverse overflow-y-scroll items-center border-black rounded-lg h-[400px] bg-slate-100">
     {chatMessage?.map((chat,index)=>{
    return <Message key={index} name={chat?.name} message={chat?.message} />
     })}
    </div>
  );
};

export default LiveComment;
