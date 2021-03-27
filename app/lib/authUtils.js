const authRequired = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.status(401).send({ message: "Unauthorized!" });
  }
};

module.exports = {
  authRequired,
};
