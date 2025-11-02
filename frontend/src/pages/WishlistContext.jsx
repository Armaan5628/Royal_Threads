import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // ✅ Fetch wishlist from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/wishlist", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => setWishlist(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addToWishlist = async (item) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/wishlist/add",
        item,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const removeFromWishlist = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/wishlist/${id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      setWishlist(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const clearWishlist = async () => {
    try {
      await axios.delete("http://localhost:5000/api/wishlist/clear", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setWishlist([]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
};
