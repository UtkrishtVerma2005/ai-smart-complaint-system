const express = require("express");

const cors = require("cors");

require("dotenv").config();

const connectDB =
require("./config/db");

const errorMiddleware =
require("./middleware/errorMiddleware");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());

/* HOME ROUTE */

app.get("/",(req,res)=>{

   res.send(
      "AI Smart Complaint System Backend Running"
   );
});

app.use(
   "/api/auth",
   require("./routes/authRoutes")
);

app.use(
   "/api/complaints",
   require("./routes/complaintRoutes")
);

app.use(
   "/api/ai",
   require("./routes/aiRoutes")
);

app.use(errorMiddleware);

app.listen(process.env.PORT, ()=>{

   console.log(
      `Server Running On ${process.env.PORT}`
   );
});