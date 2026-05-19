const router =
require("express").Router();

const {

   addComplaint,
   getComplaints,
   updateComplaint,
   deleteComplaint

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

router.delete(
   "/:id",
   deleteComplaint
);

module.exports = router;