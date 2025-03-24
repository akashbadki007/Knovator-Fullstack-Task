const API_URL = "http://localhost:3000/api";

export const fetchProducts = async () => {
  const response = await fetch(`${API_URL}/fetchproducts`);
  return response.json();
};

export const placeOrder = async (orderData) => {
  try {
    const response = await fetch("http://localhost:3000/api/placeorder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const data = await response.json();
    console.log("Server Response:", data); // Debugging line

    return data;
  } catch (error) {
    console.error("API Call Error:", error);
    return { success: false, message: "Server error" };
  }
};

