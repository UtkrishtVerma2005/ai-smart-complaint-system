const router =
require("express").Router();

const {

   addComplaint,
   getComplaints,
   updateComplaint

} =
require("../controllers/complaintController");

const authMiddleware =
require("../middleware/authMiddleware");

const validateComplaint =
require("../middleware/validateMiddleware");

router.post(

   "/",

   authMiddleware,

   validateComplaint,

   addComplaint
);

router.get(
   "/",
   getComplaints
);

router.put(
   "/:id",
   updateComplaint
);

module.exports = router;