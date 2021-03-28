const passport = require("passport");

const authenticateAfterLogin = passport.authenticate("local", {
  successRedirect: "/home",
  failureRedirect: "/login",
});

const authenticateAfterRegister = passport.authenticate("local", {
  successRedirect: "/login",
});

const authRequired = (req, res, next) => {
  if (AUTH_STATUS) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized!" });
  }
};

module.exports = {
  authRequired,
  authenticateAfterLogin,
  authenticateAfterRegister,
};
