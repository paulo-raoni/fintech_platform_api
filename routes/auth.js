const router = require("express").Router();
const controller = require("../app/controllers/authController");
const User = require("../app/models/user");
const {
  registerValidators,
  validateFields,
} = require("../app/validators/authValidator");

const {
  authRequired,
  authenticateAfterLogin,
  authenticateAfterRegister,
} = require("../app/lib/authUtils");

router.get("/home", authRequired, (req, res) => {
  res.status(200).send({ message: "You are at HOME PAGE!" });
});

router.get("/login", authRequired, (req, res) => {
  if(req.user) {
    req.logout(); //logout to prevent login after register
  }
  res.status(200).send({ message: "You are at LOGIN PAGE!" });
});

router.get("/register", authRequired, (req, res)=>{
  res.status(200).send({ response: "You are at REGISTER!" });
});

router.post(
  "/register",
  registerValidators(),
  (req, res, next) => {
    const { body } = req;
    const user = new User({
      username: body.username,
      password: body.password,
      cpf: body.cpf,
    });

    // Validator using express-validator
    const errorList = validateFields(req);

    if (errorList.length) {
      res.status(400).send({ errorList });
    } else {
      user.save((err) => {
        if(err) {
          console.log("There was an error on user register!");
          res.status(401).send({ error: "There was an error on user register!" });
        } else {
          next();
        }
      });
    }

  },
  authenticateAfterRegister
);

router.post("/login", authenticateAfterLogin);

router.get("/logOut", (req, res) => {
  req.logout();
  res.status(200).send({ message: "Logged Out successfully!" });
});

module.exports = router;
