import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { api } from "../services/api"; // Axios instance with baseURL

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // ✅ Send login request to backend
      const res = await api.post("/auth/login", { email, password });

      // ✅ Save JWT token + user info in localStorage
      localStorage.setItem("token", res.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify({ _id: res.data._id, email: res.data.email })
      );

      alert("Login Successful 🎉");

      // ✅ Redirect to home page
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid email or password ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* 🔹 Login Form Section */}
      <section className="flex flex-1 items-center justify-center bg-brand-mist px-6">
        <div className="bg-white shadow-luxe rounded-xl2 p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-brand-navy mb-6">
            Login
          </h1>

          {/* 🔹 Error Message */}
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}

          {/* 🔹 Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-brand-gold focus:outline-none"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-gold hover:text-brand-charcoal transition disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          <p className="text-sm text-center text-gray-600 mt-4">
            Don’t have an account?{" "}
            <a href="/signup" className="text-brand-gold hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
