import React from 'react'
import Search from './search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-[30%] borderm-4 border rounded-2xl m-4 bg-blue-950'>
      <Search/>
      <div className=' py-2 overflow-y-auto ' style={{minHeight:"calc(88vh - 8vh"}}>
                <Users/>
                </div>
      <Logout/>
       
      
    </div>
  )
}

export default Left
