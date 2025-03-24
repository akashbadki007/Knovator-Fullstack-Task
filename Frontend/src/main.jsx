import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext"; // 🛒 Cart Context
import { OrderProvider } from "./context/OrderContext"; // 🛍️ Order Context

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OrderProvider> {/* 🛍️ Provides order functionality */}
      <CartProvider> {/* 🛒 Provides cart functionality */}
        <App />
      </CartProvider>
    </OrderProvider>
  </StrictMode>
);
