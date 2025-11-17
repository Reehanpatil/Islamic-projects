const router = require("express").Router();
const { masjidController } = require("../controllers");

router.post("/create", masjidController.createMasjidProfile);
router.get("/all", masjidController.getMasjidList);

module.exports = router;
