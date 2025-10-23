import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import FeatureProducts from "../components/products/FeatureProduct";
import Products from "../components/products/Products"; // make sure this path is correct
import Footer from "../components/Footer";

// 🧠 Mock Data
const latest_product = [
  {
    _id: "1",
    name: "Wireless Headphones",
    price: 79.99,
    discount: 15,
    rating: 4.5,
    slug: "wireless-headphones",
    images: ["/images/products/1.webp"],
  },
  {
    _id: "2",
    name: "Smart Watch Pro",
    price: 129.99,
    discount: 0,
    rating: 4.8,
    slug: "smart-watch-pro",
    images: ["/images/products/2.webp"],
  },
  {
    _id: "3",
    name: "Bluetooth Speaker",
    price: 49.99,
    discount: 20,
    rating: 4.3,
    slug: "bluetooth-speaker",
    images: ["/images/products/3.webp"],
  },
  {
    _id: "4",
    name: "Premium Earbuds",
    price: 89.99,
    discount: 10,
    rating: 4.6,
    slug: "premium-earbuds",
    images: ["/images/products/4.webp"],
  },
  {
    _id: "5",
    name: "Portable Charger",
    price: 34.99,
    discount: 0,
    rating: 4.4,
    slug: "portable-charger",
    images: ["/images/products/5.webp"],
  },
];

const topRated_product = [
  {
    _id: "6",
    name: "Gaming Mouse RGB",
    price: 59.99,
    discount: 0,
    rating: 4.9,
    slug: "gaming-mouse-rgb",
    images: ["/images/products/6.webp"],
  },
  {
    _id: "7",
    name: "Mechanical Keyboard",
    price: 99.99,
    discount: 12,
    rating: 4.8,
    slug: "mechanical-keyboard",
    images: ["/images/products/7.webp"],
  },
  {
    _id: "8",
    name: "4K Monitor Ultra",
    price: 299.99,
    discount: 0,
    rating: 4.9,
    slug: "4k-monitor-ultra",
    images: ["/images/products/8.webp"],
  },
  {
    _id: "9",
    name: "Webcam HD Pro",
    price: 79.99,
    discount: 8,
    rating: 4.7,
    slug: "webcam-hd-pro",
    images: ["/images/products/1.webp"],
  },
  {
    _id: "10",
    name: "USB Microphone",
    price: 119.99,
    discount: 0,
    rating: 4.8,
    slug: "usb-microphone",
    images: ["/images/products/2.webp"],
  },
];

const discount_product = [
  {
    _id: "11",
    name: "Running Shoes Elite",
    price: 59.99,
    discount: 30,
    rating: 4.5,
    slug: "running-shoes-elite",
    images: ["/images/products/3.webp"],
  },
  {
    _id: "12",
    name: "Casual Jacket",
    price: 89.99,
    discount: 25,
    rating: 4.4,
    slug: "casual-jacket",
    images: ["/images/products/4.webp"],
  },
  {
    _id: "13",
    name: "Sunglasses Premium",
    price: 39.99,
    discount: 40,
    rating: 4.3,
    slug: "sunglasses-premium",
    images: ["/images/products/5.webp"],
  },
  {
    _id: "14",
    name: "Fitness Tracker",
    price: 69.99,
    discount: 35,
    rating: 4.6,
    slug: "fitness-tracker",
    images: ["/images/products/6.webp"],
  },
  {
    _id: "15",
    name: "Backpack Travel",
    price: 54.99,
    discount: 28,
    rating: 4.7,
    slug: "backpack-travel",
    images: ["/images/products/7.webp"],
  },
  {
    _id: "14",
    name: "Fitness Tracker",
    price: 69.99,
    discount: 35,
    rating: 4.6,
    slug: "fitness-tracker",
    images: ["/images/products/6.webp"],
  },
];

// 🏠 Home Component
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <FeatureProducts />
      <Products title="Latest Product" products={latest_product} />
      <Products title="Top Rated Product" products={topRated_product} />
      <Products title="Discount Product" products={discount_product} />
      <Footer />
    </div>
  );
};

export default Home;
