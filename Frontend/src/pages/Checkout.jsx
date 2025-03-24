import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useOrder } from "../context/OrderContext";

const Checkout = () => {
  const { state } = useLocation();
  const cart = state?.cart || [];
  const navigate = useNavigate();
  const { placeOrder } = useOrder();

  const [orderData, setOrderData] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });

  const handlePlaceOrder = async () => {
    if (!orderData.firstName || !orderData.lastName || !orderData.address) {
      alert("⚠️ All fields are required!");
      return;
    }

    if (cart.length === 0) {
      alert("⚠️ Cart cannot be empty!");
      return;
    }

    console.log("📦 Sending Order Data:", { ...orderData, cartItems: cart });

    const response = await placeOrder({ ...orderData, cartItems: cart });

    if (response.success) {
      alert("🎉 Order Placed Successfully!");
      navigate("/thank-you");
    } else {
      alert("⚠️ " + response.message);
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">🛒 Checkout</h2>

      <div className="space-y-4">
        <input
          className="border p-3 w-full rounded-lg"
          placeholder="First Name"
          onChange={(e) => setOrderData({ ...orderData, firstName: e.target.value })}
        />
        <input
          className="border p-3 w-full rounded-lg"
          placeholder="Last Name"
          onChange={(e) => setOrderData({ ...orderData, lastName: e.target.value })}
        />
        <textarea
          className="border p-3 w-full rounded-lg"
          placeholder="Address"
          onChange={(e) => setOrderData({ ...orderData, address: e.target.value })}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-lg w-full hover:bg-green-700 transition-all cursor-pointer"
          onClick={handlePlaceOrder}
        >
          ✅ Confirm Order
        </button>
      </div>
    </div>
  );
};

export default Checkout;
