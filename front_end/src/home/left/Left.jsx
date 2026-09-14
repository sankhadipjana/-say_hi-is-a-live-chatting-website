import React from 'react'
import Search from './search'
import Users from './Users'
import Logout from './Logout'

const Left = () => {
  return (
    <div className='w-[30%] borderm-4 border rounded-2xl m-4 bg-blue-950'>
      <Search/>
      <Users/>
      <Logout/>
       
      
    </div>
  )
}

export default Left
