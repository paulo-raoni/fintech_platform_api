const mongoose = require("mongoose");

const financaSchema = new mongoose.Schema(
  {
    saldo: {
      type: Number,
      required: false,
    },
    investimentos: {
      type: Array,
      required: false,
    },
    patrimonioSumarizado: {
      type: Number,
      required: false,      
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Financa', financaSchema)
