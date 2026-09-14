import React from 'react'
import { SiIlovepdf } from "react-icons/si";


const Chat = () => {
  return (
    <div className=''>
        <div className='h-[8vh] rounded-t-2xl w-full bg-black flex '>
             <div className="avatar online m-2">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div className='ml-2 mt-2 '>
<h1 className='font-bold text-white  '>sankha</h1>
    <span>sankha@gmail.com</span>
    </div>
    <SiIlovepdf  className="ml-auto mr-4 mt-4 text-4xl text-white cursor-pointer 

             transition duration-300 hover:text-sky-500 hover:scale-110"/>
        </div>
       
    </div>
  )
}

export default Chat
