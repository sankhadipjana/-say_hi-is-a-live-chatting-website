import React from 'react'
import cookie from 'js-cookie';
import { useState,useEffect } from 'react';
import axios from 'axios';


const useGetallUsers = () => {
const [Allusers,setAllUsers]=useState([]);
const [loading,setLoading]=useState(false);
useEffect(()=>{
     const getusers = async ()=>{
        setLoading(true);
            try{
                const token = cookie.get("jwt");
                const res = await axios.get("/api/users/allusers",{
                    credentials:"include",
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });
                setAllUsers(res.data)
                setLoading(false)
                
                

             }catch(error){
        console.log(error)
        }
     }
     
getusers()     
},[])
return [Allusers, loading]
}

export default useGetallUsers
