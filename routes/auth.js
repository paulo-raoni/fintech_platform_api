const router = require("express").Router();
const User = require("../app/models/userSchema");

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
