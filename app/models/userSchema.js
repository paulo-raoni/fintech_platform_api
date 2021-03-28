const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: Number,
      required: true,
    },
    checkingAccountAmount: {
      type: Number,
      require: false,
      default: 0,
    }
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .get(function () {
    return null;
  })
  .set(function (value) {
    const hash = bcrypt.hashSync(value, 10);
    this.passwordHash = hash;
  });

userSchema.methods.authenticate = function (password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

userSchema.statics.authenticate = function (username, password, done) {
  this.findOne({ username }, function (err, user) {
    if (err) {
      console.log("Error attempting to authenticate", err);
      done(err);
    } else if (user && user.authenticate(password)) {
      console.log("Successful login.");
      done(null, user);
    } else {
      console.log("Password wrong");
      done(null, false);
    }
  });
};

module.exports = mongoose.model("User", userSchema);