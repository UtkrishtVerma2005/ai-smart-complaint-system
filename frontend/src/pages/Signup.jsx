import { useState }
from "react";

import {
   Link,
   useNavigate
}
from "react-router-dom";

import API from "../services/api";

function Signup(){

   const navigate =
   useNavigate();

   const [data,setData] =
   useState({

      name:"",
      email:"",
      password:""
   });

   const handleChange = (e)=>{

      setData({

         ...data,

         [e.target.name]:
         e.target.value
      });
   };

   const handleSubmit =
   async(e)=>{

      e.preventDefault();

      try{

         await API.post(

            "/api/auth/signup",

            data
         );

         alert(
            "Registration Successful"
         );

         navigate("/");

      }catch(error){

         console.log(error);

         alert(

            error.response?.data?.message ||

            "Registration Failed"
         );
      }
   };

   return(

      <div className="container">

         <div className="circle1"></div>

         <div className="circle2"></div>

         <h1 className="title">
            Register
         </h1>

         <form onSubmit={handleSubmit}>

            <div className="input-box">

               <label>
                  Your Name
               </label>

               <input
               type="text"
               name="name"
               placeholder="Enter your name"
               onChange={handleChange}
               required
               />

            </div>

            <div className="input-box">

               <label>
                  Your Email
               </label>

               <input
               type="email"
               name="email"
               placeholder="Enter your email"
               onChange={handleChange}
               required
               />

            </div>

            <div className="input-box">

               <label>
                  Your Password
               </label>

               <input
               type="password"
               name="password"
               placeholder="Enter password"
               onChange={handleChange}
               required
               />

            </div>

            <button type="submit">

               Register

            </button>

         </form>

         <div className="switch-text">

            <div className="register-line">

               <span>
                  Already Registered?
               </span>

               <Link to="/">
                  Login Here
               </Link>

            </div>

         </div>

      </div>
   );
}

export default Signup;