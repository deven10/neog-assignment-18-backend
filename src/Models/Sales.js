const mongoose = require("mongoose");

const SalesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);

const Sales = mongoose.model("Sales", SalesSchema);

module.exports = Sales;
