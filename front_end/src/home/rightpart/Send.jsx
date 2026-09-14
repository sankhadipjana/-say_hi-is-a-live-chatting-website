import React from 'react'
import { IoSendOutline } from "react-icons/io5";


const Send = () => {
  return (
     <div className='flex h-[8hv]'>
         <div className='w-[93%] ml-2'>
            <input type="text" 
               placeholder="Type here" 
                className="input input-bordered   w-full bg-blue-900" />
        </div>
      <div>
      <button>
        <IoSendOutline className='text-4xl mt-1 ml-2' />
      </button>
      </div>
     </div>
  )
}

export default Send
