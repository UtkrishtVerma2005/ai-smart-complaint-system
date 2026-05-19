function AIResult({result}){

   return(

      <div
      style={{
         border:"1px solid blue",
         padding:"10px",
         marginTop:"20px"
      }}>

         <h2>
            AI Analysis Result
         </h2>

         <pre>
            {result}
         </pre>

      </div>
   );
}

export default AIResult;