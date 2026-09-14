import React from 'react'
import Rigth from './home/rightpart/Rigth'
import Left from './home/left/Left'


const App = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from from-indigo-500 to-teal-400">
      <Left/>
      <Rigth/>
    
    </div>
  )
}

export default App


