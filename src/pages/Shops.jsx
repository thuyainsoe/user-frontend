import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Range } from "react-range";
import { AiFillStar } from "react-icons/ai";
import { CiStar } from "react-icons/ci";
import Products from "../components/products/Products";
import ShopProducts from "../components/products/ShopProducts";
import Pagination from "../components/Pagination";
import Dropdown from "../components/Dropdown";

// --- Mock data remains the same ---
const mockCategories = [
  { name: "Electronics" },
  { name: "Fashion" },
  { name: "Home & Kitchen" },
  { name: "Books" },
  { name: "Sports" },
  { name: "Beauty" },
];

const sortOptions = [
  { label: "Sort By", value: "" },
  { label: "Price: Low to High", value: "low-to-high" },
  { label: "Price: High to Low", value: "high-to-low" },
];
const mockLatestProducts = [
  {
    _id: 1,
    name: "Wireless Headphones",
    price: 99,
    discount: 15,
    rating: 4,
    images: ["/images/products/1.webp"],
    slug: "wireless-headphones",
  },
  {
    _id: 2,
    name: "Smartwatch Pro",
    price: 199,
    discount: 20,
    rating: 5,
    images: ["/images/products/2.webp"],
    slug: "smartwatch-pro",
  },
  {
    _id: 3,
    name: "Bluetooth Speaker",
    price: 49,
    rating: 4,
    images: ["/images/products/3.webp"],
    slug: "bluetooth-speaker",
  },
];
const mockProducts = [
  {
    _id: 1,
    name: "Premium Cotton T-Shirt",
    price: 25,
    discount: 10,
    rating: 4,
    images: ["/images/products/1.webp"],
    slug: "premium-cotton-tshirt",
  },
  {
    _id: 2,
    name: "Gaming Mouse RGB",
    price: 45,
    discount: 15,
    rating: 5,
    images: ["/images/products/2.webp"],
    slug: "gaming-mouse-rgb",
  },
  {
    _id: 3,
    name: "Smartphone 5G",
    price: 499,
    discount: 25,
    rating: 5,
    images: ["/images/products/3.webp"],
    slug: "smartphone-5g",
  },
  {
    _id: 4,
    name: "4K LED Smart TV",
    price: 799,
    discount: 30,
    rating: 4,
    images: ["/images/products/4.webp"],
    slug: "4k-led-smart-tv",
  },
  {
    _id: 5,
    name: "React Complete Guide Book",
    price: 15,
    rating: 3,
    images: ["/images/products/5.webp"],
    slug: "react-complete-guide",
  },
  {
    _id: 6,
    name: "Polarized Sunglasses",
    price: 59,
    discount: 20,
    rating: 4,
    images: ["/images/products/6.webp"],
    slug: "polarized-sunglasses",
  },
  {
    _id: 7,
    name: "Yoga Mat Premium",
    price: 35,
    discount: 10,
    rating: 5,
    images: ["/images/products/7.webp"],
    slug: "yoga-mat-premium",
  },
  {
    _id: 8,
    name: "Laptop Backpack",
    price: 49,
    discount: 15,
    rating: 4,
    images: ["/images/products/8.webp"],
    slug: "laptop-backpack",
  },
];

const Shops = () => {
  const [filter, setFilter] = useState(false);
  const [rating, setRating] = useState("");
  const [sortPrice, setSortPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const [priceRange, setPriceRange] = useState({ low: 0, high: 1000 });
  const [state, setState] = useState({ values: [0, 1000] });

  const totalProduct = mockProducts.length;
  const parPage = 6;

  const queryCategory = (e, value) => {
    if (e.target.checked) setCategory(value);
    else setCategory("");
  };

  const resetRating = () => setRating("");

  return (
    <div>
      <Header />

      {/* Top Banner - Reduced height */}
      <section className="bg-gradient-to-r from-primary-500 to-primary-600 h-[160px] bg-cover bg-no-repeat relative">
        <div className="absolute left-0 top-0 w-full h-full bg-black/10">
          <div className="container min-w-full h-full">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-2xl md:text-3xl">Shop</h2>
              <div className="flex justify-center items-center gap-2 text-sm md:text-base w-full">
                <Link to="/" className="">
                  Home
                </Link>
                <IoIosArrowForward />
                <span>Shop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Section - Reduced vertical padding */}
      <section className="py-2 bg-bg-light">
        <div className="container min-w-full mx-auto">
          {/* Added horizontal padding for mobile */}
          {/* Mobile Filter Button */}
          <div className="block md:hidden mb-2">
            <button
              onClick={() => setFilter(!filter)}
              className="text-center w-full py-2.5 px-4 bg-primary-500 text-white font-medium rounded-md text-sm"
            >
              {filter ? "Hide Filters" : "Show Filters"}
            </button>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-3">
            {/* Sidebar Filter */}
            {/* FIX: Corrected responsive width classes and padding */}
            <div
              className={`w-full md:w-4/12 lg:w-3/12 ${
                filter ? "block mb-1 md:mb-0" : "hidden md:block"
              }`}
            >
              <div className="space-y-3">
                {/* Added space-y to manage gaps between cards */}
                {/* Category Card - Reduced padding */}
                <div className="bg-white rounded-lg p-3 border border-border">
                  <h2 className="text-base mb-2 text-text-900 font-medium">
                    Categories
                  </h2>
                  <div className="space-y-1.5">
                    {" "}
                    {/* Reduced space between checkboxes */}
                    {mockCategories.map((c, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <input
                          checked={category === c.name}
                          onChange={(e) => queryCategory(e, c.name)}
                          type="checkbox"
                          id={c.name}
                          className="w-4 h-4 text-primary-500 border-border rounded focus:ring-primary-500 cursor-pointer"
                        />
                        <label
                          className="text-text-700 text-sm cursor-pointer transition-colors"
                          htmlFor={c.name}
                        >
                          {c.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Price Range Card - Reduced padding */}
                <div className="bg-white rounded-lg p-3 shadow-sm border border-border">
                  <h2 className="text-base mb-3 text-text-900">Price Range</h2>
                  <Range
                    step={5}
                    min={priceRange.low}
                    max={priceRange.high}
                    values={state.values}
                    onChange={(values) => setState({ values })}
                    renderTrack={({ props, children }) => (
                      <div
                        {...props}
                        className="w-full h-[6px] bg-bg-light rounded-full cursor-pointer"
                      >
                        {children}
                      </div>
                    )}
                    renderThumb={({ props }) => (
                      <div
                        className="w-[15px] h-[15px] bg-primary-500 rounded-full"
                        {...props}
                      />
                    )}
                  />
                  <div className="mt-3">
                    <span className="text-text-900 text-sm">
                      ${Math.floor(state.values[0])} - $
                      {Math.floor(state.values[1])}
                    </span>
                  </div>
                </div>
                {/* Rating Card - Reduced padding and gaps */}
                <div className="bg-white rounded-lg p-3 border border-border">
                  <h2 className="text-base mb-2 text-text-900 font-medium">
                    Rating
                  </h2>
                  <div className="flex flex-col gap-2">
                    {" "}
                    {/* Reduced gap */}
                    {[5, 4, 3, 2, 1].map((r) => (
                      <div
                        key={r}
                        onClick={() => setRating(r)}
                        className={`flex items-center gap-2 text-base cursor-pointer transition-colors ${
                          rating === r ? "text-secondary-500" : "text-slate-400"
                        }`}
                      >
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < r ? <AiFillStar key={i} /> : <CiStar key={i} />
                        )}
                        <span className="text-xs text-text-600">& Up</span>
                      </div>
                    ))}
                    <div
                      onClick={resetRating}
                      className={`flex items-center gap-2 text-base cursor-pointer transition-colors ${
                        rating === ""
                          ? "text-secondary-500"
                          : "text-slate-400 hover:text-secondary-500"
                      }`}
                    >
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <CiStar key={i} />
                        ))}
                      <span className="text-xs text-text-600">All</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            {/* FIX: Corrected responsive width classes, removed problematic padding */}
            <div className="w-full md:w-8/12 lg:w-9/12">
              <div className="py-3 bg-white mb-2 px-4 rounded-lg flex justify-between items-center border border-border">
                <h2 className="text-sm text-text-900">
                  <span className="text-primary-500">{totalProduct}</span>{" "}
                  Products Found
                </h2>
                <div className="flex items-center gap-2">
                  <Dropdown
                    trigger={
                      sortPrice
                        ? sortOptions.find((opt) => opt.value === sortPrice)
                            ?.label
                        : "Sort By"
                    }
                    items={sortOptions}
                    onSelect={(item) => setSortPrice(item.value)}
                    position="right"
                    buttonClassName="px-3 py-1.5 border border-border rounded-md text-text-900 text-sm font-medium bg-white hover:border-primary-500 transition-colors"
                    menuClassName="w-48"
                    renderItem={(item) => (
                      <div
                        className={`px-4 py-2 hover:bg-bg-light hover:text-primary-500 transition-colors text-sm ${
                          sortPrice === item.value
                            ? "bg-bg-light text-primary-500 font-medium"
                            : "text-text-900"
                        }`}
                      >
                        {item.label}
                      </div>
                    )}
                  />
                </div>
              </div>

              <div className="pb-8">
                <ShopProducts products={mockProducts} />
              </div>

              {totalProduct > parPage && (
                <Pagination
                  pageNumber={pageNumber}
                  setPageNumber={setPageNumber}
                  totalItem={totalProduct}
                  parPage={parPage}
                  showItem={Math.floor(totalProduct / parPage)}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shops;
