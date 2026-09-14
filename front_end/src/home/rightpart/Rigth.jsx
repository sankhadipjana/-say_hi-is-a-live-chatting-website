import React from 'react'
import Chat from './Chat'
import Messages from './Messages'
import Send from './Send'

const Rigth = () => {
  return (
    <div className=' w-[70%] border  bg-blend-overlay rounded-2xl mt-4 mb-4 mr-4 bg-blue-950'>
        <Chat/>
        <div className=' py-2 overflow-y-auto ' style={{maxHeight:"calc(88vh - 8vh"}}>
          <Messages/>
          </div>
        
        <Send/>
    </div>
  )
}

export default Rigth
