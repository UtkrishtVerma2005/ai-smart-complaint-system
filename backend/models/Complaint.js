const mongoose = require("mongoose");

const ComplaintSchema =
new mongoose.Schema({

   name:String,

   email:String,

   title:String,

   description:String,

   category:String,

   location:String,

   status:{
      type:String,
      default:"Pending"
   }

},
{
   timestamps:true
});

module.exports =
mongoose.model("Complaint", ComplaintSchema);