import ComplaintForm
from "../components/ComplaintForm";

import Complaints
from "./Complaints";

import { useNavigate }
from "react-router-dom";

function Home(){

   const navigate =
   useNavigate();

   const handleLogout = ()=>{

      localStorage.removeItem(
         "token"
      );

      navigate("/");
   };

   return(

      <div className="container">

         <div className="circle1"></div>

         <div className="circle2"></div>

         <button
         className="logout-btn"
         onClick={handleLogout}
         >

            Logout

         </button>

         <h1 className="title">

            AI Smart Complaint System

         </h1>

         <ComplaintForm />

         <Complaints />

      </div>
   );
}

export default Home;