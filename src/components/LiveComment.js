import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "./Message";
import { addMessages } from "../utils/chatSlice";
import {AiOutlineSend} from "react-icons/ai"
import useChatMessage from "../utils/hooks/useChatMessage";
import { handleSubmitChat } from "../utils/helper";

const LiveComment = () => {
  const [message,setMessage]=useState("")
const chatMessage=useSelector(store=>store.chat.message)
const dispatch=useDispatch()
useChatMessage()

  return (
    <>
    <div className="border-2 flex flex-col-reverse overflow-y-scroll items-center border-black rounded-lg h-[400px] bg-slate-100">
     {chatMessage?.map((chat,index)=>{
    return <Message key={index} name={chat?.name} message={chat?.message} />
     })}
    </div>
    <form onSubmit={(e)=>handleSubmitChat(e,dispatch,addMessages,message,setMessage)} className="flex w-full  border-2  ">
    <input type="text" className="w-1/2 text-xl outline-none" value={message} onChange={(e)=>{setMessage(e.target.value)}} />
    <button className="mx-2 border-2 p-2 bg-gray-600 text-white "><AiOutlineSend/></button>
    </form>
    </>

  );
};

export default LiveComment;
