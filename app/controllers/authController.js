
const register = async (req, res) => {
  try {
    res.status(200).send({ response: "OK" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const logIn = async (req, res) => {
  try {
    res.status(200).send({ response: "OK" });
  } catch (error) {
    res.status(400).send(error);
  }
};

const logOut = async (req, res) => {
  try {
    res.status(200).send({ response: "OK" });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  register,
  logIn,
  logOut,
};
