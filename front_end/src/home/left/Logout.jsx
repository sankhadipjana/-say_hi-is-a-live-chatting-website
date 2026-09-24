import React from 'react'
import { TbLogout2 } from "react-icons/tb";
import axios from 'axios';
import cookie from 'js-cookie';
import  toast  from 'react-hot-toast';


const Logout = () => {
  const [loading, setLoading] = React.useState(false);
  const handleLogout = async ()=>{
   setLoading(true);
    try {
      const res= await axios.post("http://localhost:3000/api/users/logout");
      localStorage.removeItem("user");
      cookie.remove("jwt");
      setLoading(false);
      window.location.reload();
      alert("Logout successful");
    }catch(error){
      console.log(error)
      setLoading(false);
    }
  }
  return (
    <div>
        <TbLogout2 className='text-5xl text-white hover:text-sky-400 pb-6 m-1 rounded-3xl'onClick={handleLogout} />
    </div>
  )
}

export default Logout
