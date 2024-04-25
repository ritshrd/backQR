const mongoose = require("mongoose");

const Stand10Schema = mongoose.Schema(
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


const Stand10 = mongoose.model("Stand10", Stand10Schema);

module.exports = Stand10;