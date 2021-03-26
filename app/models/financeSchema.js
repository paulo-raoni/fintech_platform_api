const mongoose = require("mongoose");

const financaSchema = new mongoose.Schema(
  {
    checkingAccountAmount: {
      type: Number,
      required: false,
    },
    positions: {
      type: Array,
      required: false,
    }
    // consolidated: {
    //   type: Number,
    //   required: false,      
    // }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Financa', financaSchema)
