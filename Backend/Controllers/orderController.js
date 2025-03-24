const Order = require("../models/Order");

const placeOrder = async (req, res) => {
  try {
    console.log("📩 Received Order Data:", req.body);

    const { firstName, lastName, address, cartItems } = req.body;

    if (!firstName || !lastName || !address || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ success: false, message: "⚠️ All fields are required, including cart items" });
    }

    const newOrder = new Order({ firstName, lastName, address, cartItems });
    await newOrder.save();

    res.json({ success: true, message: "✅ Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error("❌ Error placing order:", error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

module.exports = { placeOrder };
