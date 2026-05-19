import { useEffect,useState }
from "react";

import API from "../services/api";

import ComplaintCard
from "../components/ComplaintCard";

function Complaints(){

   const [complaints,setComplaints]
   = useState([]);

   useEffect(()=>{

      fetchComplaints();

   },[]);

   const fetchComplaints =
   async()=>{

      try{

         const response =
         await API.get(
            "/api/complaints"
         );

         setComplaints(
            response.data
         );

      }catch(error){

         console.log(error);
      }
   };

   return(

      <div className="complaints-section">

         <h2 className="complaint-heading">

            All Complaints

         </h2>

         {
            complaints.map((item)=>(

               <ComplaintCard

                  key={item._id}

                  complaint={item}

                  fetchComplaints={
                     fetchComplaints
                  }

               />
            ))
         }

      </div>
   );
}

export default Complaints;