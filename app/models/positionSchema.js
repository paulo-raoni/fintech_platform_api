const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    positions: {
      type: Array,
      required: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Position", positionSchema);
