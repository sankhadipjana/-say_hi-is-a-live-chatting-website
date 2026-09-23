import React from 'react'
import Rigth from './home/rightpart/Rigth'
import Left from './home/left/Left'
import Signup from './componene/Signup'
import Login from './componene/Login'
import {useAuth}  from './context/authprovider'
import { Route,Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom'



const App = () => {
   const [AuthUser, setAuthUser] = useAuth(); 
   console.log(AuthUser) 
  return (

   <Routes>
    <Route path = "/" element = {AuthUser?   (<div className="flex h-screen bg-gradient-to-r from from-indigo-500 to-teal-400">
       <Left/>
      <Rigth/>
     </div>):(<Navigate to = {"/login"}/>)}
   />
    <Route path = "/login" element = {AuthUser ? <Navigate to = {"/"}/> : <Login/>}/>
    <Route path = "/signup" element = {AuthUser ? <Navigate to = {"/"}/> :<Signup/>}/>

   </Routes>

  )
}

export default App


