import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => setAlertMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  const handleAddToCart = () => {
    addToCart(product);
    setAlertMessage("✅ Product added to cart!");
  };

  return (
    <div className="border p-4 rounded shadow-md relative bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>

      <button
        className="mt-3 bg-blue-600 hover:bg-blue-900 text-white px-3 py-1 rounded cursor-pointer"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>

      {alertMessage && (
        <div className="absolute top-2 right-2 bg-green-500 text-white px-4 py-2 rounded-md">
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
