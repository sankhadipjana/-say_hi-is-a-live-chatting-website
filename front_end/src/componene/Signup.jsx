import React, { useState } from "react";
import { useForm } from "react-hook-form" //react-hook-form import
import axios from "axios" //axios import
import {useAuth}  from "../context/authprovider" //import useAuth from authprovider
const Signup = () => {

  const [AuthUser, setAuthUser] = useAuth();


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//react-hook-form setup
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()  
  //watch password
  const password = watch("password", "");
  const confirmPassword = watch("confirmPassword", "");

  const validatePasswordMatch = (value) => {
    return value === password || "Passwords do not match";
  };
  const onSubmit = async (data) => {
      const userData = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      };
    
      await axios.post("http://localhost:3000/api/users/signup",userData)
   .then((response) =>{
      if (response.data){
        alert("Signup successful")
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

      {/* Signup Card */}
      <div className="w-50% ">

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
          <div className="
            absolute
            -top-20
            -right-20
            h-40
            w-40
            rounded-full
            bg-cyan-400/20
            blur-3xl
          " />

          <div className="
            absolute
            -bottom-20
            -left-20
            h-40
            w-40
            rounded-full
            bg-purple-500/20
            blur-3xl
          " />


          {/* Logo */}
          <div className="relative text-center mb-2">

            <div className="flex justify-center items-center gap-2">

              {/* Simple Logo */}
              <div className="
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
              ">
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
          <div className="relative mb-2">

            <h2 className="text-2xl font-bold text-white">
              Create your account
            </h2>

          </div>


          {/* Form */}
          <form className="relative space-y-4" onSubmit={handleSubmit(onSubmit)}>


            {/* Full Name */}
            <div>

              <div className="relative">

                <span className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                ">
                  👤
                </span>

                <input
                  {...register("fullname", { required: true })}
                  type="text"
                  placeholder="Enter your full name"
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
              {errors["fullname"] && <span>Full Name is required</span>}
                
            </div>


            {/* Email */}
            <div>

              <div className="relative">

                <span className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                ">
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


              <div className="relative">

                <span className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                ">
                  🔒
                </span>

                <input
                  {...register("password", { required: true ,})}
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
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


            {/* Confirm Password */}
            <div>

              <div className="relative">

                <span className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-lg
                ">
                  🔐
                </span>

                <input
                  {...register("confirmPassword", { required: true,validate: validatePasswordMatch })}
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your password"
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

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
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
                  {showConfirmPassword ? "🙈" : "👁️"}
                </button>

              </div>
              {errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}
              
            </div>
            


            {/* Terms */}
            <div className="flex items-start gap-3 text-sm">

              <input
                type="checkbox"
                className="
                  mt-1
                  h-4
                  w-4
                  cursor-pointer
                  accent-cyan-400
                "
              />

              <p className="text-gray-400">
                I agree to the{" "}
                <span className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                  Terms & Conditions
                </span>
                {" "}and{" "}
                <span className="cursor-pointer text-cyan-400 hover:text-cyan-300">
                  Privacy Policy
                </span>
              </p>

            </div>


            {/* Signup Button */}
            <button
              type="submit" //</form> to submit the form data when clicked
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
              Create Account
            </button>


            {/* Login */}
            <p className="text-center text-sm text-gray-400">

              Already have an account?{" "}

              <button
                type="button"
                className="
                  font-semibold
                  text-cyan-400
                  transition
                  hover:text-cyan-300
                "
              >
                Login
              </button>

            </p>

          </form>

        </div>

      </div>

    </div>
  );
};


export default Signup