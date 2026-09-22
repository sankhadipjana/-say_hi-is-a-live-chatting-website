import React from 'react'
import Rigth from './home/rightpart/Rigth'
import Left from './home/left/Left'
import Signup from './componene/Signup'
import Login from './componene/Login'


const App = () => {
  return (
    // <div className="flex h-screen bg-gradient-to-r from from-indigo-500 to-teal-400">
    //   <Left/>
    //   <Rigth/>
    
    // </div>
    <div>
      <Signup/>
      <Login/>
    </div>
  )
}

export default App


