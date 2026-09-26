import React from 'react'

const User = ({user}) => {
  return (
    <div>
        <div className='flex space-x-4 px-2 py-2 rounded-2xl hover:bg-gradient-to-r border-white
hover:from-cyan-400
hover:via-blue-600
hover:to-purple-600
hover:shadow-[0_0_20px_rgba(34,211,238,0.8),0_0_40px_rgba(59,130,246,0.6),0_0_60px_rgba(139,92,246,0.4)] duration-300'>
    <div className="avatar online">
  <div className="w-12 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
<div>
    <h1 className='font-bold text-white '>{user.fullname}</h1>
    <span>{user.email}</span>
</div>
</div>
      
    </div>
  )
}

export default User
