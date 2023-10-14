import { BiSolidUserCircle } from "react-icons/bi"

const Message = ({name,message}) => {
  return (
    
      <span className="w-full mx-4  flex items-center p-2 ">
      <BiSolidUserCircle className="text-4xl " />
      <p className="mx-2 font-bold text-xl ">{name}</p>
      <p className="text-gray-800 font-semibold font-mono ml-2">{message}</p>
      </span>

  )
}

export default Message
