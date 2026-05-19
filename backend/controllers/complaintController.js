const Complaint =
require("../models/Complaint");

exports.addComplaint =
async(req,res)=>{

   try{

      const complaint =
      await Complaint.create(req.body);

      res.json({
         message:"Complaint Added",
         complaint
      });

   }catch(error){

      res.status(500).json({
         message:error.message
      });
   }
};

exports.getComplaints =
async(req,res)=>{

   const complaints =
   await Complaint.find();

   res.json(complaints);
};

exports.updateComplaint =
async(req,res)=>{

   const updated =
   await Complaint.findByIdAndUpdate(

      req.params.id,

      req.body,

      {new:true}
   );

   res.json(updated);
};