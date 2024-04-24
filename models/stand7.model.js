const mongoose = require("mongoose");

const Stand7Schema = mongoose.Schema(
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


const Stand7 = mongoose.model("Stand7", Stand7Schema);

module.exports = Stand7;