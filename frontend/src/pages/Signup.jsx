import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import { api } from "../services/api"; // Axios instance
import { motion } from "framer-motion";
import Plasma from "./plasma";  

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    postalCode: "",
    country: ""
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const refs = {
    username: useRef(),
    email: useRef(),
    password: useRef(),
    confirmPassword: useRef(),
    phone: useRef(),
    postalCode: useRef(),
    country: useRef()
  };

  const countries = ["Canada","USA","India","UK","Australia","Germany","France","Other"];

  const validate = () => {
    const errs = {};
    const pwdRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!formData.username) errs.username = "Username required";
    if (!formData.email) errs.email = "Email required";
    if (!formData.password) errs.password = "Password required";
    else if (!pwdRegex.test(formData.password))
      errs.password = "Password must have 1 uppercase, 1 lowercase, 1 number and 8+ chars";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Passwords do not match";
    if (!formData.phone) errs.phone = "Phone number required";
    if (!formData.postalCode) errs.postalCode = "Postal code required";
    if (!formData.country) errs.country = "Country required";

    setErrors(errs);
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      const firstError = Object.keys(errs)[0];
      const el = refs[firstError].current;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("shake");
      setTimeout(() => el.classList.remove("shake"), 500);
      return;
    }

    try {
      const res = await api.post("/auth/register", formData);
      setMessage("✅ Signup Successful! Redirecting to login...");
      localStorage.setItem("token", res.data.token);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Signup failed");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex flex-1 justify-center items-center bg-brand-mist relative">
        {/* Radial background */}
        <div className="absolute w-full h-full flex justify-center items-center">
          <div className="w-96 h-96 rounded-full bg-gradient-to-r from-yellow-400 to-blue-900 opacity-20 animate-spin-slow blur-3xl"></div>
        </div>

        {/* Signup Box with animated border */}
        <motion.div
          className="relative w-full max-w-md z-10 p-1 rounded-xl2"
          style={{
            background: "linear-gradient(90deg, #0B2545, #FFD700, #0B2545, #FFD700)",
            padding: "4px",
            borderRadius: "1rem",
            backgroundSize: "300% 300%"
          }}
        >
          <div className="bg-white rounded-xl2 p-8 shadow-lg w-full">
            <h1 className="text-3xl font-bold text-center mb-6 text-brand-navy">
              Sign Up
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <div className="relative">
                <input
                  ref={refs.username}
                  name="username"
                  type="text"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.username ? "border-red-500" : ""
                  }`}
                />
                {errors.username && <p className="text-red-600 text-sm mt-1">{errors.username}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  ref={refs.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  ref={refs.password}
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.password ? "border-red-500" : ""
                  }`}
                />
                {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  ref={refs.confirmPassword}
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.confirmPassword ? "border-red-500" : ""
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">{errors.confirmPassword}</p>
                )}
              </div>

              {/* Phone */}
              <div className="relative">
                <input
                  ref={refs.phone}
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.phone ? "border-red-500" : ""
                  }`}
                />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
              </div>

              {/* Postal Code */}
              <div className="relative">
                <input
                  ref={refs.postalCode}
                  name="postalCode"
                  type="text"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.postalCode ? "border-red-500" : ""
                  }`}
                />
                {errors.postalCode && <p className="text-red-600 text-sm mt-1">{errors.postalCode}</p>}
              </div>

              {/* Country */}
              <div className="relative">
                <select
                  ref={refs.country}
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold ${
                    errors.country ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                {errors.country && <p className="text-red-600 text-sm mt-1">{errors.country}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-brand-navy text-white rounded-lg hover:bg-brand-gold hover:text-brand-charcoal transition"
              >
                Sign Up
              </button>
            </form>

            {message && <p className="text-center mt-4 text-sm">{message}</p>}

            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <Link to="/login" className="text-brand-gold hover:underline">
                Login
              </Link>
            </p>
          </div>
        </motion.div>
      </section>

      
    </div>
  );
}
