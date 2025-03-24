import { createContext, useContext, useState, useEffect } from "react";
import { placeOrder as placeOrderAPI } from "../api/api";

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const placeOrder = async (orderData) => {
    try {
      const response = await placeOrderAPI(orderData);

      if (response.success) {
        setOrders((prev) => [...prev, response.order]); // ✅ Save the actual order
        return { success: true, message: response.message };
      } else {
        return { success: false, message: response.message };
      }
    } catch (error) {
      console.error("❌ Order Placement Error:", error);
      return { success: false, message: "Failed to place order" };
    }
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
