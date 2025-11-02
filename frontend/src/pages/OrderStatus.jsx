import React, { useEffect, useState } from "react";
import Header from "../components/Header";

export default function OrderStatus() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = localStorage.getItem("lastOrder");
    if (savedOrder) {
      try {
        setOrder(JSON.parse(savedOrder));
      } catch {
        console.error("Error parsing saved order data.");
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Main Content */}
      <section className="py-16 px-6 md:px-20 flex-1 bg-brand-mist">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-navy text-center mb-10">
          Order Status 📦
        </h1>

        {!order ? (
          <p className="text-center text-brand-charcoal">
            No order found. Please place an order first.
          </p>
        ) : (
          <div className="max-w-3xl mx-auto bg-white shadow-luxe rounded-xl2 p-6">
            {/* Order Header */}
            <div className="mb-6 border-b pb-4">
              <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
              <p className="text-brand-charcoal mt-2">
                Current Status:{" "}
                <span className="text-brand-gold font-semibold">
                  {order.status || "Processing"}
                </span>
              </p>
            </div>

            {/* Order Items */}
            <div className="space-y-3">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between text-brand-charcoal border-b border-gray-100 pb-2"
                >
                  <span>{item.title}</span>
                  <span>
                    ${item.price}.00 × {item.quantity}
                  </span>
                </div>
              ))}
            </div>

            {/* Order Total */}
            <div className="mt-6 text-right">
              <h3 className="text-lg font-bold text-brand-navy">
                Total: ${order.total}.00
              </h3>
            </div>
          </div>
        )}
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-brand-navy text-brand-ivory py-6 text-center">
        <p className="text-sm">© 2025 MyClothing. All rights reserved.</p>
      </footer>
    </div>
  );
}
