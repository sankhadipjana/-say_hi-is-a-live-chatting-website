import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/authprovider";
import { Link } from "react-router-dom"; //import Link from react-router-dom

const Login = () => {
    const [AuthUser, setAuthUser] = useAuth();
  

     const [showPassword, setShowPassword] = useState(false);
   const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()  


    const onSubmit = (data) => {
      const userData = {

        email: data.email,
        password: data.password,
      };
    
    axios.post("http://localhost:3000/api/users/login",userData)
   .then((response) =>{
      if (response.data){
        alert("Login successful")
      }
      localStorage.setItem("user",JSON.stringify(response.data))
      console.log(response.data)
      setAuthUser(response.data)

  })
  .catch((error) =>{
    if(error.response){
      alert(error.response.data.error)
  }
  })

  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-blue-500 to-teal-400 flex items-center justify-center px-4 py-8">

      {/* Login Container */}
      <div className="w-full max-w-md">

        {/* Login Card */}
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border border-white/50
            bg-[#17275c]/95
            p-8
            shadow-[0_20px_60px_rgba(0,0,0,0.35)]
            backdrop-blur-xl
          "
        >

          {/* Decorative Glow */}
          <div
            className="
              absolute
              -top-20
              -right-20
              h-40
              w-40
              rounded-full
              bg-cyan-400/20
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              h-40
              w-40
              rounded-full
              bg-purple-500/20
              blur-3xl
            "
          />


          {/* Logo */}
          <div className="relative text-center mb-10">

            <div className="flex justify-center items-center gap-2">

              {/* Logo */}
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-cyan-400
                  to-blue-600
                  text-2xl
                  shadow-[0_0_25px_rgba(34,211,238,0.4)]
                "
              >
                💬
              </div>

              <h1 className="text-4xl font-bold text-white">
                Chat<span className="text-cyan-400">Hub</span>
              </h1>

            </div>

            <p className="mt-3 text-sm text-gray-300">
              Connect . Chat . Share
            </p>

          </div>


          {/* Heading */}
          <div className="relative mb-7">

            <h2 className="text-2xl font-bold text-white">
              Welcome back 👋
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              Login to continue chatting with your friends.
            </p>

          </div>


          {/* Login Form */}
          <form className="relative space-y-5" onSubmit={handleSubmit(onSubmit)}>


            {/* Email */}
            <div>


              <div className="relative">

                <span
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-lg
                  "
                >
                  ✉️
                </span>

                <input 
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter your email"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-blue-400/30
                    bg-[#243b82]
                    py-3.5
                    pl-12
                    pr-4
                    text-white
                    placeholder-gray-400
                    outline-none
                    transition
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    hover:border-blue-300/60
                  "
                />

              </div>
              {errors["email"] && <span>Email is required</span>}

            </div>


            {/* Password */}
            <div>

              <div className="flex items-center justify-between mb-2">

    

              </div>


              <div className="relative">

                <span
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-lg
                  "
                >
                  🔒
                </span>

                <input
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="
                    w-full
                    rounded-xl
                    border
                    border-blue-400/30
                    bg-[#243b82]
                    py-3.5
                    pl-12
                    pr-12
                    text-white
                    placeholder-gray-400
                    outline-none
                    transition
                    duration-300
                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/30
                    hover:border-blue-300/60
                  "
                />

                {/* Show / Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute
                    right-4
                    top-1/2
                    -translate-y-1/2
                    text-gray-300
                    hover:text-cyan-400
                    transition
                  "
                >
                  {showPassword ? "🙈" : "👁️"}
                </button>

              </div>
              {errors["password"] && <span>Password is required</span>}

            </div>


            {/* Remember Me */}
            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                className="
                  h-4
                  w-4
                  cursor-pointer
                  accent-cyan-400
                "
              />

              <span className="text-sm text-gray-400">
                Remember me
              </span>

            </div>


            {/* Login Button */}
            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                py-3.5
                text-base
                font-bold
                text-white
                shadow-[0_0_25px_rgba(34,211,238,0.35)]
                transition
                duration-300
                hover:scale-[1.02]
                hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]
                active:scale-[0.98]
              "
            >
              Login
            </button>



            {/* Signup */}
            <p className="text-center text-sm text-gray-400 pt-2">

              Don't have an account?{" "}

              <Link
                navigate to="/signup"
                type="button"
                className="
                  font-semibold
                  text-cyan-400
                  transition
                  hover:text-cyan-300
                "
              >
                Create Account
              </Link>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Login;