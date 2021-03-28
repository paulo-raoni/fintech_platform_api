const router = require("express").Router();
const controller = require("../app/controllers/positionController");
const { authRequired } = require("../app/lib/authUtils");

router.get("/position/:id", authRequired, controller.getPositions);
router.post("/position", authRequired, controller.postPositions);

module.exports = router;
