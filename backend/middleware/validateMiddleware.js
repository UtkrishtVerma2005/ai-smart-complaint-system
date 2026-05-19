const validateComplaint =
(req,res,next)=>{

   const {
      name,
      email,
      title,
      description
   } = req.body;

   if(
      !name ||
      !email ||
      !title ||
      !description
   ){

      return res.status(400).json({

         message:
         "All Fields Are Required"
      });
   }

   const emailRegex =
   /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if(!emailRegex.test(email)){

      return res.status(400).json({

         message:"Invalid Email"
      });
   }

   next();
};

module.exports = validateComplaint;