import { useState }
from "react";

import {
 Link,
 useNavigate
}
from "react-router-dom";

import API from "../services/api";

function Login(){

   const navigate =
   useNavigate();

   const [data,setData] =
   useState({

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

         const response =
         await API.post(

            "/api/auth/login",

            data
         );

         localStorage.setItem(

            "token",

            response.data.token
         );

         navigate("/home");

      }catch(error){

         alert(
            "Invalid Credentials"
         );
      }
   };

   return(

      <div className="container">

         <div className="circle1"></div>

         <div className="circle2"></div>

         <h1 className="title">
            Welcome
         </h1>

         <form onSubmit={handleSubmit}>

            <div className="input-box">

               <label>
                  Your Email
               </label>

               <input
               type="email"
               name="email"
               placeholder="Enter your email"
               onChange={handleChange}
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
               />

            </div>

            <button type="submit">
               Sign In
            </button>

         </form>

         <div className="switch-text">

            <div className="register-line">

               <span>
                  Don't have an account?
               </span>

               <Link to="/signup">
                  Register Here
               </Link>

            </div>

            <a href="#">
               Forgot Password?
            </a>

         </div>

      </div>
   );
}

export default Login;