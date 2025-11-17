const router = require("express").Router();
const { jobController } = require("../controllers");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

router.post("/create", auth, allowRoles("masjid"), jobController.createJob);

router.get("/list", jobController.getJobs);

module.exports = router;
