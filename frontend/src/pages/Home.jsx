import ComplaintForm
from "../components/ComplaintForm";

import Complaints
from "./Complaints";

function Home(){

   return(

      <div className="main-layout">

         <div className="left-panel">

            <div className="container">

               <div className="circle1"></div>

               <div className="circle2"></div>

               <h1 className="title">

                  AI Smart
                  Complaint System

               </h1>

               <ComplaintForm />

            </div>

         </div>

         <div className="right-panel">

            <Complaints />

         </div>

      </div>
   );
}

export default Home;