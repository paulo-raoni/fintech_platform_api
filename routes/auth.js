const router = require("express").Router();
const controller = require("../app/controllers/authController");
const User = require("../app/models/user");
const passport = require("passport");

const authenticateAfterLogin = passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
});

const authenticateAfterRegister = passport.authenticate("local", {
    successRedirect: "/home",
});

const authRequired = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.status(401).send({ message: "Unauthorized!" });
    }
};

router.get('/home', authRequired, (req, res) => {
    res.status(200).send({message: 'You are at HOME PAGE!'});
});

router.get('/login', (req, res) => {
    res.status(200).send({message: 'You are at LOGIN PAGE!'});
});


router.get("/register", authRequired, controller.register);

router.post("/register", (req, res, next) => {
  const { body } = req;
  const user = new User({
    username: body.username,
    password: body.password,
  });
  user.save((err) => {
    if (err) {
      console.log("There was an error on user register!");
      res.status(401).send({ error: "There was an error on user register!" });
    } 
    next();
  });
}, authenticateAfterRegister);


router.post("/login", authenticateAfterLogin);

router.get("/logOut", (req, res) => {
    req.logout();
    res.status(200).send({message: "Logged Out successfully!"});
});

module.exports = router;
