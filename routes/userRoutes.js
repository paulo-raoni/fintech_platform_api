const router = require("express").Router();
const controller = require("../app/controllers/usersController");
const {
  authRequired,
} = require("../app/lib/authUtils");

router.post("/userData", authRequired, controller.getUserData);

router.patch("/addAccountAmount", authRequired, controller.addAccountAmount);

router.post("/registerUser", controller.registerUser);

module.exports = router;
