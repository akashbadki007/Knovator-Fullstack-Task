const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  cartItems: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      quantity: { type: Number, required: true },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
