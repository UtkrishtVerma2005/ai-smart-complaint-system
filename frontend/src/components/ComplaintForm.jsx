import { useState } from "react";

import API from "../services/api";

function ComplaintForm(){

   const [loading,setLoading] =
   useState(false);

   const [formData,setFormData] =
   useState({

      name:"",
      email:"",
      title:"",
      description:"",
      category:"",
      location:""
   });

   const handleChange = (e)=>{

      setFormData({

         ...formData,

         [e.target.name]:
         e.target.value
      });
   };

   const handleSubmit =
   async(e)=>{

      e.preventDefault();

      if(loading) return;

      setLoading(true);

      try{

         const token =
         localStorage.getItem("token");

         const response =
         await API.post(

            "/api/complaints",

            formData,

            {
               headers:{
                  Authorization:token
               }
            }
         );

         alert(
            response.data.message
         );

         setFormData({

            name:"",
            email:"",
            title:"",
            description:"",
            category:"",
            location:""
         });

         window.location.reload();

      }catch(error){

         console.log(error);

         alert(
            "Complaint Submission Failed"
         );
      }

      setLoading(false);
   };

   return(

      <form onSubmit={handleSubmit}>

         <input
         type="text"
         name="name"
         placeholder="Name"
         value={formData.name}
         onChange={handleChange}
         required
         />

         <input
         type="email"
         name="email"
         placeholder="Email"
         value={formData.email}
         onChange={handleChange}
         required
         />

         <input
         type="text"
         name="title"
         placeholder="Title"
         value={formData.title}
         onChange={handleChange}
         required
         />

         <textarea
         name="description"
         placeholder="Description"
         value={formData.description}
         onChange={handleChange}
         required
         />

         <input
         type="text"
         name="category"
         placeholder="Category"
         value={formData.category}
         onChange={handleChange}
         required
         />

         <input
         type="text"
         name="location"
         placeholder="Location"
         value={formData.location}
         onChange={handleChange}
         required
         />

         <button
         type="submit"
         disabled={loading}
         >

            {
               loading
               ?
               "Submitting..."
               :
               "Submit"
            }

         </button>

      </form>
   );
}

export default ComplaintForm;