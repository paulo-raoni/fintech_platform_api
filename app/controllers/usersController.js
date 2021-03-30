const userService = require("../services/userService");
const mongoose = require("mongoose");
const User = require("../models/userSchema");
const {
  registerValidator,
} = require("../validators/generalValidator");


// For future implementation
const getUserData = async (req, res) => {
  try {
    const body = req.body;
    if (!body) throw new Error("Body is empty.");
    const id = mongoose.Types.ObjectId(body.id);
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

// For future implementation
const addAccountAmount = async (req, res) => {
  try {
    
    const id = mongoose.Types.ObjectId(body.id);
    const user = await userService.getUser(id);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const registerUser = async (req, res, next) => {
  try {
    const { body } = req;
    const user = new User({
      username: body.username,
      password: body.password,
      name: body.name,
      cpf: body.cpf,
    });
    
    // Validate required fields
    const errorList = registerValidator(body);

    if (errorList.length) {
      res.status(400).send({ errorList });
    } else {
      user.save((err) => {
        if (err) {
          console.log("There was an error on user register!");
          res
            .status(401)
            .send({ error: "There was an error on user register!" });
        } else {
          res.status(200).send({message: "User has been registered!"});
        }
      });
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getUserData,
  addAccountAmount,
  registerUser,
};
