import React from 'react'
import User from './User'
import { CiSearch } from "react-icons/ci";
import useGetallUsers from '../../context/useGetallusers';





const Users = () => {
  const [AllUsers, loading] = useGetallUsers();
  console.log(AllUsers)
  return (
    <div className=''>
      <div>
   <form action="">
            <div className='flex space-x-2 pl-3 '> 
              <label className="input h-10 input-bordered  bg-blue-900 rounded-xl flex items-center gap-2 w-[98%] hover:shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(59,130,246,0.6),0_0_60px_rgba(139,92,246,0.4)] ">
                  <input type="text" className="grow" placeholder="Search your chats...." />
             </label>
            </div>
         </form>

      </div>
      
      

      <div className=' py-2 overflow-y-auto ' style = {{maxHeight:'calc(82vh - 10vh)'}}>  

        {AllUsers.map((user,index)=>(
          <User key = {index} user= {user}/>
        ))}
       
      

      </div>
      
    </div>
  )
}

export default Users
