const router = require("express").Router();
const User = require("../app/models/userSchema");

// const {
//   authRequired,
//   authenticateAfterLogin,
// } = require("../app/lib/authUtils");

// router.get("/home", authRequired, (req, res) => {
//   res.status(200).send({ message: "You are at HOME PAGE!" });
// });

// router.get("/login", authRequired, (req, res) => {
//   if (req.user) {
//     req.logout(); //logout to prevent login after register
//   }
// });

// router.get("/register", authRequired, (req, res) => {
//   res.status(200).send({ response: "You are at REGISTER!" });
// });

router.post("/login", (req, res, next) => {
  let user;
  User.findOne({ username: req.body.username })
    .then((record) => {
      if(!record) return res.status(200).send({ user: "User does not exist!" });
      user = record;
      AUTH_STATUS = true;
      res.status(200).send({ user });
    })
    .catch(next);
});

router.get("/logOut", (req, res) => {
  try {
    req.logout();
    AUTH_STATUS = false;
    res.status(200).send({ message: "Logged Out successfully!" });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
