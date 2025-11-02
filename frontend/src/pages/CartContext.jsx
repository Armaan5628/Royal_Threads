import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CartContext = createContext(undefined);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ✅ Fetch cart from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }, []);

  // ✅ Add item to cart
  const addToCart = async (item) => {
    try {
      const res = await axios.post("http://localhost:5000/api/cart/add", item, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCart(res.data); // update with backend response
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Remove item from cart
  const removeFromCart = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:5000/api/cart/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCart(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // ✅ Clear entire cart
  const clearCart = async () => {
    try {
      await axios.delete("http://localhost:5000/api/cart/clear", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCart([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return context;
};
