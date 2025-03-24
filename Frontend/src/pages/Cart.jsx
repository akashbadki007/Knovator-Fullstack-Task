import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  }, [cart]);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Your cart is empty 😔</p>
      ) : (
        <>
          {/* Total Price & Checkout Button */}
          <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-lg mb-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Total: <span className="text-green-600 font-bold">₹{totalPrice}</span>
            </h3>
            
            <button
              className="bg-green-600 text-white px-6 py-2 cursor-pointer rounded-lg text-lg font-semibold hover:bg-green-700 transition-all"
              onClick={() => {
                console.log("Navigating with cart data:", cart); // ✅ Debugging
                navigate("/checkout", { state: { cart } })
              }}>
              🛍️ Buy Now
            </button>
          </div>

          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item._id}
                className="grid grid-cols-5 items-center gap-4 p-4 border bg-white rounded-lg shadow-md"
              >
                {/* Product Image */}
                <div className="flex items-center col-span-2 space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover border"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600 font-medium">₹{item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls - Center Aligned */}
                <div className="flex justify-center items-center">
                  <button
                    className="bg-gray-300 text-gray-900 px-3 py-1 rounded-md text-xl cursor-pointer hover:bg-gray-400"
                    onClick={() => updateQuantity(item._id, "decrease")}
                  >
                    -
                  </button>
                  <span className="text-lg font-bold text-gray-800 mx-3">{item.quantity}</span>
                  <button
                    className="bg-blue-600 text-white px-3 py-1 rounded-md text-xl cursor-pointer hover:bg-blue-700"
                    onClick={() => updateQuantity(item._id, "increase")}
                  >
                    +
                  </button>
                </div>

                {/* Total Price for This Item */}
                <h3 className="text-lg font-semibold text-gray-900 text-center">
                  ₹{item.price * item.quantity}
                </h3>

                {/* Remove Button */}
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all cursor-pointer"
                    onClick={() => removeFromCart(item._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;