const router = require("express").Router();
const { verificationController } = require("../controllers");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

router.post(
  "/approve",
  auth,
  allowRoles("admin"),
  verificationController.approveVerification
);

module.exports = router;
