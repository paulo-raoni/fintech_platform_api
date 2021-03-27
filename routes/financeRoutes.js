const router = require("express").Router();
const controller = require("../app/controllers/financeController");
const { authRequired } = require("../app/lib/authUtils");

router.get("/finance", authRequired, controller.getFinanceData);
router.post("/finance", authRequired, controller.postFinanceData);
router.patch("/finance", authRequired, controller.patchFinanceData);
router.delete("/finance", authRequired, controller.deleteFinanceData);

module.exports = router;
