import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GiThreeLeaves } from "react-icons/gi";



const Search = () => {
  return (
    <div>
      <div className='flex'>
      <GiThreeLeaves  className='text-4xl ml-4 m-2 mt-4'/>

    <div className='px-3 pt-4 flex pl-4 text-3xl'> 
    <h1 className='text-white text-4xl'>Chat</h1> <h1 className='text-3xl mt-1 text-[oklch(78.9%_0.154_211.53)]'>Hub</h1>
    </div>
      </div>
    <p className='pl-20 text-white text-xs pb-3'>Connect . Chat . Share</p>
  
    </div>
  )
}

export default Search


    // <form action="">
    //        <div className='flex space-x-3'> 
    //          <label className="input bg-blue-950 input-bordered rounded-2xl flex items-center gap-2 w-[85%] hover:bg-blue-800">
    //              <input type="text" className="grow" placeholder="Search" />
    //         </label>
    //         <button className='text-4xl'>
    //             <CiSearch />
    //         </button>
    //        </div>
    //     </form>
