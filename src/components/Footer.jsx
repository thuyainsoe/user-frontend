import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaHeart,
} from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const Footer = () => {
  const navigate = useNavigate();

  // 🧠 Mock data
  const mockUser = { name: "Ryan", loggedIn: true };
  const mockCartCount = 2;
  const mockWishlistCount = 1;

  return (
    <footer className="bg-[#f3f6fa] border-t border-slate-200">
      {/* 🌍 Top Section */}
      <div className="container min-w-full py-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* 🏠 Logo + Address */}
        <div>
          <Link to="/" className="inline-block mb-3">
            <h1 className="text-2xl lg:text-3xl font-bold text-primary-500">
              ShopHub
            </h1>
          </Link>
          <ul className="text-slate-600 text-sm space-y-1.5">
            <li>📍 2504 Ivins Avenue, NJ 08234</li>
            <li>📞 +1 555 123 4567</li>
            <li>📧 support@example.com</li>
          </ul>
        </div>

        {/* 🔗 Useful Links */}
        <div className="flex justify-start gap-10">
          <ul className="space-y-1.5 text-slate-600 text-sm font-semibold">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Our Shop</Link>
            </li>
            <li>
              <Link to="#">Delivery Info</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Blogs</Link>
            </li>
          </ul>

          <ul className="space-y-1.5 text-slate-600 text-sm font-semibold">
            <li>
              <Link to="#">Our Service</Link>
            </li>
            <li>
              <Link to="#">Company Profile</Link>
            </li>
            <li>
              <Link to="#">Track Order</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* 📨 Subscribe */}
        <div>
          <h2 className="font-bold text-base mb-2">Join Our Shop</h2>
          <p className="text-sm text-slate-600 mb-4">
            Get email updates about our latest deals and special offers.
          </p>
          <div className="flex items-center bg-white rounded-md border overflow-hidden mb-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-3 py-2 outline-none text-sm"
            />
            <button className="bg-primary-500 text-white px-4 py-2 text-sm font-semibold uppercase transition">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedin, FaGithub].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-[34px] h-[34px] bg-white rounded-full flex justify-center items-center text-slate-700 text-base hover:bg-primary-500 hover:text-white transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ⚙️ Bottom Section */}
      <div className="border-t border-slate-200 text-center py-5 text-slate-600 text-sm">
        <p>
          © 2024 <span className="font-semibold text-primary-500">ShopHub</span>{" "}
          — All Rights Reserved.
        </p>
      </div>

      {/* 🛒 Floating Buttons (Mobile Only) */}
      {/* <div className="fixed bottom-3 right-3 flex flex-col gap-3 md:hidden">
        <div
          onClick={() => navigate(mockUser.loggedIn ? "/cart" : "/login")}
          className="relative flex justify-center items-center cursor-pointer w-[45px] h-[45px] rounded-full bg-white shadow-md hover:bg-[#f2f2f2] transition"
        >
          <FaCartShopping className="text-green-600 text-lg" />
          {mockCartCount > 0 && (
            <div className="absolute -top-[3px] -right-[3px] bg-red-500 text-white text-xs w-[20px] h-[20px] rounded-full flex justify-center items-center">
              {mockCartCount}
            </div>
          )}
        </div>

        <div
          onClick={() => navigate(mockUser.loggedIn ? "/wishlist" : "/login")}
          className="relative flex justify-center items-center cursor-pointer w-[45px] h-[45px] rounded-full bg-white shadow-md hover:bg-[#f2f2f2] transition"
        >
          <FaHeart className="text-green-600 text-lg" />
          {mockWishlistCount > 0 && (
            <div className="absolute -top-[3px] -right-[3px] bg-red-500 text-white text-xs w-[20px] h-[20px] rounded-full flex justify-center items-center">
              {mockWishlistCount}
            </div>
          )}
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;
