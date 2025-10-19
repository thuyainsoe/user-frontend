import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ChevronRight, ChevronDown } from "lucide-react";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaUser,
  FaLock,
  FaList,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaEnvelope,
} from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);
  // FIX: Created separate states for each category dropdown to prevent them from opening simultaneously.
  const [showNavCategoryDropdown, setShowNavCategoryDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showCategories, setShowCategories] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);

  // Mock data - Replace with actual data from your backend/state management
  const isLoggedIn = false; // Change to true to test logged in state
  const userName = "John Doe"; // Mock user name
  const wishlistCount = 3; // Mock wishlist count
  const cartCount = 5; // Mock cart count

  // Sample categories - Replace with actual categories from your API
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home & Kitchen",
    "Books",
    "Sports",
    "Beauty",
    "Toys",
    "Automotive",
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blog", label: "Blog" },
    { to: "/about", label: "About Us" },
    { to: "/contact", label: "Contact Us" },
  ];

  const languages = ["English", "Hindi", "Spanish", "French"];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      navigate(
        `/products/search?category=${selectedCategory}&q=${searchValue}`
      );
    }
  };

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang);
    setShowLanguageDropdown(false);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:block bg-primary-500 text-white container min-w-full">
        {/* REFACTOR: Reduced height and gaps for a tighter layout */}
        <div className="flex justify-between items-center h-[40px] text-sm">
          <div className="flex items-center gap-4">
            <a
              href="mailto:support@ecommerce.com"
              className="flex items-center gap-2 hover:text-highlight transition-colors"
            >
              <FaEnvelope className="text-xs" />
              <span className="hidden lg:inline">support@ecommerce.com</span>
            </a>
            <a
              href="tel:+1234567890"
              className="flex items-center gap-2 hover:text-highlight transition-colors"
            >
              <FaPhoneAlt className="text-xs" />
              <span>+123 456 7890</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <FaTwitter className="text-sm" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-highlight transition-colors"
              >
                <FaGithub className="text-sm" />
              </a>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-2 hover:text-highlight transition-colors"
              >
                <span>{selectedLanguage}</span>
                <MdOutlineKeyboardArrowDown
                  className={`transition-transform ${
                    showLanguageDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>
              {showLanguageDropdown && (
                <div className="absolute right-0 top-full mt-2 bg-white text-text-900 shadow-lg rounded-md py-1 w-32 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`w-full text-left px-4 py-1.5 hover:bg-bg-light transition-colors text-sm ${
                        selectedLanguage === lang
                          ? "bg-bg-light text-primary-500 font-medium"
                          : ""
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-2">
              {isLoggedIn ? (
                <Link
                  to="/dashboard"
                  className="flex items-center gap-2 hover:text-highlight transition-colors"
                >
                  <FaUser className="text-xs" />
                  <span>{userName}</span>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center gap-2 hover:text-highlight transition-colors"
                >
                  <FaLock className="text-xs" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-border container min-w-full">
        <div className="mx-auto">
          {/* REFACTOR: Reduced height for a more compact header */}
          <div className="h-[80px] flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowSidebar(!showSidebar)}
                className="md:hidden text-2xl text-text-900"
              >
                <FaBars />
              </button>
              <Link to="/" className="flex items-center">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
                  ShopHub
                </h1>
              </Link>
            </div>

            <div className="hidden md:flex flex-1 max-w-2xl mx-4 lg:mx-8">
              <form
                onSubmit={handleSearch}
                className="w-full flex items-center border border-border rounded-md overflow-hidden focus-within:border-primary-500 transition-colors"
              >
                <input
                  type="text"
                  placeholder="Search for products..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-sm outline-none text-text-900 placeholder:text-text-600"
                />
                <button
                  type="submit"
                  className="px-3.5 lg:px-5 h-full bg-secondary-500 text-white hover:bg-secondary-600 transition-colors"
                >
                  <FaSearch className="text-sm" />
                </button>
              </form>
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <div className="hidden xl:flex items-center gap-3 border-r border-border pr-4">
                <div className="w-10 h-10 rounded-full bg-bg-light flex items-center justify-center">
                  <FaPhoneAlt className="text-primary-500" />
                </div>
                <div>
                  <p className="text-xs text-text-600">24/7 Support</p>
                  <p className="text-sm font-semibold text-text-900">
                    +123 456 7890
                  </p>
                </div>
              </div>
              <Link
                to="/wishlist"
                className="relative text-text-900 hover:text-primary-500 transition-colors"
              >
                <FaHeart className="text-xl" />
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    {wishlistCount}
                  </span>
                )}
              </Link>
              <Link
                to="/cart"
                className="relative text-text-900 hover:text-primary-500 transition-colors"
              >
                <FaShoppingCart className="text-xl" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div className="md:hidden pb-4">
            <form
              onSubmit={handleSearch}
              className="w-full flex items-center border border-border rounded-md overflow-hidden"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="flex-1 px-4 py-2 text-sm outline-none text-text-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary-500 text-white"
              >
                <FaSearch />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Navigation Bar - Desktop */}
      <div className="hidden md:block bg-bg-light border-b border-border container min-w-full">
        <div className="mx-auto">
          <div className="flex items-center justify-between h-[50px]">
            <div className="relative">
              <button
                onClick={() =>
                  setShowNavCategoryDropdown(!showNavCategoryDropdown)
                }
                className="flex items-center gap-2 px-3 py-1.5 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors text-sm"
              >
                <FaList className="text-base" />
                <span className="font-medium">All Categories</span>
                <MdOutlineKeyboardArrowDown
                  className={`text-lg transition-transform ${
                    showNavCategoryDropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showNavCategoryDropdown && (
                <div className="absolute left-0 top-full mt-1 bg-white shadow-md rounded-md py-1 w-44 z-50 border border-border">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category}
                      to={`/products?category=${category}`}
                      onClick={() => setShowNavCategoryDropdown(false)}
                      className="block px-3 py-1.5 hover:bg-gray-100 text-sm text-gray-800 hover:text-primary-500 transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <nav className="flex items-center gap-6">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  className="text-text-900 hover:text-primary-500 font-medium transition-colors text-sm"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity duration-300 ${
          showSidebar ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setShowSidebar(false)}
      >
        <div
          className={`fixed left-0 top-0 h-full w-[280px] bg-white shadow-lg transform transition-transform duration-300 overflow-y-auto ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-white z-10">
            <h2 className="text-xl font-bold text-primary-500">Menu</h2>
            <button
              onClick={() => setShowSidebar(false)}
              className="text-2xl text-text-900 hover:text-primary-500"
            >
              <FaTimes />
            </button>
          </div>

          {/* User Section */}
          <div className="p-4 border-b border-border bg-bg-light">
            {isLoggedIn ? (
              <Link
                to="/dashboard"
                onClick={() => setShowSidebar(false)}
                className="flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center">
                  <FaUser />
                </div>
                <div>
                  <p className="font-semibold text-text-900">{userName}</p>
                  <p className="text-xs text-text-600">View Profile</p>
                </div>
              </Link>
            ) : (
              <Link
                to="/login"
                onClick={() => setShowSidebar(false)}
                className="flex items-center gap-2 text-primary-500 font-medium"
              >
                <FaLock />
                <span>Login / Register</span>
              </Link>
            )}
          </div>

          {/* Navigation Links */}
          <nav className="py-2">
            {[
              { to: "/", label: "Home" },
              { to: "/shop", label: "Shop" },
              { to: "/blog", label: "Blog" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setShowSidebar(false)}
                className="block px-4 py-3 text-text-900 hover:bg-bg-light hover:text-primary-500 transition-colors"
              >
                {label}
              </Link>
            ))}

            {/* Categories Section */}
            <div className="mt-2 border-t border-border">
              <button
                onClick={() => setShowCategories(!showCategories)}
                className="w-full flex items-center justify-between px-4 py-3 text-text-900 hover:bg-bg-light transition-colors"
              >
                <span className="text-sm font-medium">Categories</span>
                {showCategories ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>

              {showCategories && (
                <div className="pl-2">
                  {categories.slice(1).map((category) => (
                    <Link
                      key={category}
                      to={`/products?category=${category}`}
                      onClick={() => setShowSidebar(false)}
                      className="block px-4 py-2 text-text-900 hover:bg-bg-light hover:text-primary-500 transition-colors text-sm"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Language Section */}
            <div className="mt-2 border-t border-border">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="w-full flex items-center justify-between px-4 py-3 text-text-900 hover:bg-bg-light transition-colors"
              >
                <span className="text-sm font-medium">Language</span>
                {showLanguages ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </button>

              {showLanguages && (
                <div className="px-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`block w-full text-left px-4 py-2 text-sm rounded-md transition-colors ${
                        selectedLanguage === lang
                          ? "bg-primary-500 text-white"
                          : "text-text-900 hover:bg-bg-light hover:text-primary-500"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Social Media */}
            <div className="mt-4 border-t border-border pt-4 px-4 pb-4">
              <p className="pb-2 text-xs font-semibold text-text-600 uppercase">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                {[
                  {
                    href: "https://facebook.com",
                    icon: <FaFacebookF />,
                  },
                  {
                    href: "https://twitter.com",
                    icon: <FaTwitter />,
                  },
                  {
                    href: "https://linkedin.com",
                    icon: <FaLinkedinIn />,
                  },
                  {
                    href: "https://github.com",
                    icon: <FaGithub />,
                  },
                ].map(({ href, icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-full bg-bg-light flex items-center justify-center text-primary-500 hover:bg-primary-500 hover:text-white transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
