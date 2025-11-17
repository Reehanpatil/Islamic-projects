const router = require("express").Router();
const { imamController } = require("../controllers");
const { auth } = require("../middleware/auth.middleware");
const { allowRoles } = require("../middleware/role.middleware");

router.post(
  "/create",
  auth,
  allowRoles("imam"),
  imamController.createImamProfile
);

router.get("/:userId", auth, imamController.getImamProfile);

module.exports = router;
