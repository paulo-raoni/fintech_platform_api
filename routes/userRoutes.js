const router = require("express").Router();
const controller = require("../app/controllers/usersController");
const {
  authRequired,
  authenticateAfterRegister
} = require("../app/lib/authUtils");

router.post("/userData", authRequired, controller.getUserData);

router.patch("/addAccountAmount", authRequired, controller.addAccountAmount);

router.post("/registerUser", controller.registerUser, authenticateAfterRegister);

module.exports = router;
