const mongoose = require("mongoose");

const Stand8Schema = mongoose.Schema(
  {
    _id: {
      type: String,
      required: false,
    },
    nombre: {
      type: String,
      required: [false, "Please enter product name"],
      default: 0,
    },

    cargo: {
      type: String,
      required: false,
      default: 0,
    },

    empresa: {
      type: String,
      required: false,
      default: 0,
    },

    email: {
      type: String,
      required: false,
      default: 0,
    },
    cel: {
        type: String,
        required: false,
        default: 0,
      },
  },
  {
    timestamps: true,
  }
);


const Stand8 = mongoose.model("Stand8", Stand8Schema);

module.exports = Stand8;