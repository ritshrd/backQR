const mongoose = require("mongoose");

const Stand6Schema = mongoose.Schema(
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


const Stand6 = mongoose.model("Stand6", Stand6Schema);

module.exports = Stand6;