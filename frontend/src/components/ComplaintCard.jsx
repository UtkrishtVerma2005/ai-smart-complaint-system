import API from "../services/api";

function ComplaintCard({

   complaint,
   fetchComplaints

}){

   let department = "";
   let priority = "";
   let resolution = "";

   if(complaint.category === "Water Supply"){

      department =
      "Water Supply Department";

      priority = "High";

      resolution = "24 Hours";
   }

   else if(
      complaint.category ===
      "Electricity"
   ){

      department =
      "Electricity Department";

      priority = "High";

      resolution = "12 Hours";
   }

   else if(
      complaint.category ===
      "Sanitation"
   ){

      department =
      "Sanitation Department";

      priority = "Medium";

      resolution = "48 Hours";
   }

   else if(
      complaint.category ===
      "Road Maintenance"
   ){

      department =
      "Road Repair Department";

      priority = "Medium";

      resolution = "3 Days";
   }

   else if(
      complaint.category ===
      "Street Lighting"
   ){

      department =
      "Electrical Maintenance Team";

      priority = "Low";

      resolution = "2 Days";
   }

   else{

      department =
      "General Department";

      priority = "Normal";

      resolution = "5 Days";
   }

   const handleDelete =
   async()=>{

      try{

         await API.delete(

            `/api/complaints/${complaint._id}`
         );

         fetchComplaints();

      }catch(error){

         console.log(error);
      }
   };

   return(

      <div className="card">

         <h3>
            {complaint.title}
         </h3>

         <p>
            {complaint.description}
         </p>

         <p>

            <strong>
               Category:
            </strong>

            {" "}

            {complaint.category}

         </p>

         <p>

            <strong>
               Location:
            </strong>

            {" "}

            {complaint.location}

         </p>

         <p>

            <strong>
               Status:
            </strong>

            {" "}

            {complaint.status}

         </p>

         <div className="ai-box">

            <h4>
               AI Recommendation
            </h4>

            <p>

               This complaint should
               be forwarded to the

               <strong>

                  {" "}
                  {department}

               </strong>

            </p>

            <p>

               <strong>
                  Priority:
               </strong>

               {" "}
               {priority}

            </p>

            <p>

               <strong>
                  Expected Resolution:
               </strong>

               {" "}
               {resolution}

            </p>

         </div>

         <button
         className="delete-btn"
         onClick={handleDelete}
         >

            Delete Complaint

         </button>

      </div>
   );
}

export default ComplaintCard;