import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Products from "../components/products/Products";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "../components/Rating";
import { FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Reviews from "../components/Reviews";
import toast from "react-hot-toast";

// Custom Arrow Components for Carousel
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-500 text-text-700 hover:text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border border-border hover:border-primary-500"
      aria-label="Previous"
    >
      <FaChevronLeft className="text-sm sm:text-base" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-primary-500 text-text-700 hover:text-white w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md transition-all duration-300 border border-border hover:border-primary-500"
      aria-label="Next"
    >
      <FaChevronRight className="text-sm sm:text-base" />
    </button>
  );
};

// Mock Product Data
const mockProduct = {
  _id: "1",
  name: "Premium Wireless Headphones",
  slug: "premium-wireless-headphones",
  category: "Electronics",
  description:
    "Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals alike.",
  price: 199.99,
  discount: 20,
  stock: 15,
  rating: 4.5,
  shopName: "Tech World Store",
  sellerId: "seller123",
  images: [
    "/images/products/1.webp",
    "/images/products/2.webp",
    "/images/products/3.webp",
    "/images/products/4.webp",
    "/images/products/5.webp",
  ],
};

const mockRelatedProducts = [
  {
    _id: "2",
    name: "Bluetooth Speaker",
    slug: "bluetooth-speaker",
    price: 79.99,
    discount: 15,
    rating: 4.3,
    images: ["/images/products/6.webp"],
  },
  {
    _id: "3",
    name: "Smart Watch Pro",
    slug: "smart-watch-pro",
    price: 299.99,
    discount: 0,
    rating: 4.7,
    images: ["/images/products/7.webp"],
  },
  {
    _id: "4",
    name: "Wireless Earbuds",
    slug: "wireless-earbuds",
    price: 129.99,
    discount: 25,
    rating: 4.6,
    images: ["/images/products/8.webp"],
  },
  {
    _id: "5",
    name: "USB-C Cable",
    slug: "usb-c-cable",
    price: 19.99,
    discount: 0,
    rating: 4.2,
    images: ["/images/products/1.webp"],
  },
  {
    _id: "6",
    name: "Phone Case Premium",
    slug: "phone-case-premium",
    price: 29.99,
    discount: 10,
    rating: 4.4,
    images: ["/images/products/2.webp"],
  },
  {
    _id: "7",
    name: "Screen Protector",
    slug: "screen-protector",
    price: 14.99,
    discount: 5,
    rating: 4.1,
    images: ["/images/products/3.webp"],
  },
];

const mockMoreProducts = [
  {
    _id: "8",
    name: "Wireless Mouse",
    slug: "wireless-mouse",
    price: 24.99,
    discount: 0,
    rating: 4.3,
    images: ["/images/products/4.webp"],
  },
  {
    _id: "9",
    name: "Laptop Stand",
    slug: "laptop-stand",
    price: 39.99,
    discount: 15,
    rating: 4.5,
    images: ["/images/products/5.webp"],
  },
  {
    _id: "10",
    name: "Webcam HD",
    slug: "webcam-hd",
    price: 49.99,
    discount: 10,
    rating: 4.2,
    images: ["/images/products/6.webp"],
  },
  {
    _id: "11",
    name: "LED Desk Lamp",
    slug: "led-desk-lamp",
    price: 34.99,
    discount: 0,
    rating: 4.6,
    images: ["/images/products/7.webp"],
  },
  {
    _id: "12",
    name: "Gaming Keyboard",
    slug: "gaming-keyboard",
    price: 79.99,
    discount: 20,
    rating: 4.7,
    images: ["/images/products/8.webp"],
  },
  {
    _id: "13",
    name: "Monitor Stand",
    slug: "monitor-stand",
    price: 44.99,
    discount: 0,
    rating: 4.4,
    images: ["/images/products/1.webp"],
  },
];

const Details = () => {
  const navigate = useNavigate();
  const product = mockProduct;
  const relatedProducts = mockRelatedProducts;
  const moreProducts = mockMoreProducts;

  const [image, setImage] = useState("");
  const [state, setState] = useState("reviews");
  const [quantity, setQuantity] = useState(1);

  // Mock user info (set to null to show login flow)
  const userInfo = null; // Change to { id: 'user123', name: 'John Doe' } to test logged in state

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 640, min: 480 },
      items: 5,
    },
    smallMobile: {
      breakpoint: { max: 480, min: 0 },
      items: 5,
    },
  };

  const inc = () => {
    if (quantity >= product.stock) {
      toast.error("Out of Stock");
    } else {
      setQuantity(quantity + 1);
    }
  };

  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const add_card = () => {
    if (userInfo) {
      toast.success(`Added ${quantity} item(s) to cart`);
    } else {
      navigate("/login");
    }
  };

  const add_wishlist = () => {
    if (userInfo) {
      toast.success(`Added to wishlist: ${product.name}`);
    } else {
      navigate("/login");
    }
  };

  const buynow = () => {
    if (!userInfo) {
      navigate("/login");
      return;
    }

    let price = 0;
    if (product.discount !== 0) {
      price =
        product.price - Math.floor((product.price * product.discount) / 100);
    } else {
      price = product.price;
    }

    const obj = [
      {
        sellerId: product.sellerId,
        shopName: product.shopName,
        price: quantity * (price - Math.floor((price * 5) / 100)),
        products: [
          {
            quantity,
            productInfo: product,
          },
        ],
      },
    ];

    navigate("/shipping", {
      state: {
        products: obj,
        price: price * quantity,
        shipping_fee: 50,
        items: 1,
      },
    });
  };

  return (
    <div>
      <Header />

      {/* Banner Section */}
      <section className='bg-[url("/images/banner/shop.png")] h-[180px] mt-3 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="container min-w-full mx-auto px-3 md:px-4 h-full">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-xl md:text-2xl font-bold">Product Details</h2>
              <div className="flex justify-center items-center gap-2 text-base md:text-lg w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <IoIosArrowForward />
                </span>
                <span>Product Details</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section>
        <div className="bg-bg-light py-3 mb-4">
          <div className="container min-w-full mx-auto px-3 md:px-4">
            <div className="flex justify-start items-center text-sm text-text-600 w-full gap-1">
              <Link to="/">Home</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <Link to="/">{product.category}</Link>
              <span className="pt-1">
                <IoIosArrowForward />
              </span>
              <span>{product.name}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section>
        <div className="container min-w-full mx-auto px-3 md:px-4 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {/* Product Images */}
            <div>
              <div className="p-2 md:p-4 border border-border rounded-lg bg-white">
                <img
                  className="h-[250px] sm:h-[300px] md:h-[400px] w-full object-contain"
                  src={image ? image : product.images?.[0]}
                  alt={product.name}
                />
              </div>
              <div className="py-2 relative">
                {product.images && (
                  <Carousel
                    autoPlay={true}
                    infinite={true}
                    responsive={responsive}
                    transitionDuration={500}
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                  >
                    {product.images.map((img, i) => (
                      <div
                        key={i}
                        onClick={() => setImage(img)}
                        className="px-1"
                      >
                        <img
                          className="h-[60px] sm:h-[80px] md:h-[100px] cursor-pointer border border-border rounded-lg hover:border-primary-500"
                          src={img}
                          alt=""
                        />
                      </div>
                    ))}
                  </Carousel>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="text-lg md:text-xl text-text-900 font-bold">
                <h3>{product.name}</h3>
              </div>
              <div className="flex justify-start items-center gap-3">
                <div className="flex text-base">
                  <Rating ratings={product.rating} />
                </div>
                <span className="text-green-500 text-sm">(24 reviews)</span>
              </div>

              <div className="text-lg md:text-xl font-bold flex flex-wrap gap-2 items-center">
                {product.discount !== 0 ? (
                  <>
                    <span className="text-text-600 text-sm">Price:</span>
                    <h2 className="line-through text-text-500 text-base">
                      ${product.price}
                    </h2>
                    <h2 className="text-secondary-500 text-lg md:text-xl">
                      $
                      {product.price -
                        Math.floor((product.price * product.discount) / 100)}
                    </h2>
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">
                      -{product.discount}%
                    </span>
                  </>
                ) : (
                  <h2 className="text-secondary-500 text-lg md:text-xl">
                    Price: ${product.price}
                  </h2>
                )}
              </div>

              <div className="text-text-700 text-sm">
                <p>{product.description}</p>
                <p className="text-text-900 py-1 font-bold text-sm">
                  Shop Name: {product.shopName}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pb-3 border-b border-border">
                {product.stock ? (
                  <>
                    <div className="flex bg-bg-light border border-border h-[40px] justify-center items-center text-base rounded-lg overflow-hidden">
                      <div
                        onClick={dec}
                        className="px-3 sm:px-4 cursor-pointer hover:bg-border"
                      >
                        -
                      </div>
                      <div className="px-3 sm:px-4 border-x border-border">
                        {quantity}
                      </div>
                      <div
                        onClick={inc}
                        className="px-3 sm:px-4 cursor-pointer hover:bg-border"
                      >
                        +
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={add_card}
                        className="px-4 sm:px-6 py-2 h-[40px] cursor-pointer bg-primary-500 text-white rounded-lg text-sm whitespace-nowrap"
                      >
                        Add To Cart
                      </button>
                    </div>
                  </>
                ) : null}

                <div>
                  <div
                    onClick={add_wishlist}
                    className="h-[40px] w-[40px] flex justify-center items-center cursor-pointer bg-secondary-500 text-white rounded-lg"
                  >
                    <FaHeart />
                  </div>
                </div>
              </div>

              <div className="flex py-3 gap-3 sm:gap-4">
                <div className="w-[80px] sm:w-[120px] text-text-900 font-bold text-xs sm:text-sm flex flex-col gap-3">
                  <span>Availability</span>
                  <span>Share On</span>
                </div>
                <div className="flex flex-col gap-3">
                  <span
                    className={`${
                      product.stock ? "text-green-500" : "text-red-500"
                    } text-xs sm:text-sm`}
                  >
                    {product.stock
                      ? `In Stock (${product.stock})`
                      : "Out Of Stock"}
                  </span>

                  <ul className="flex justify-start items-center gap-1.5 sm:gap-2">
                    <li>
                      <a
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex justify-center items-center bg-indigo-500 rounded-full text-white text-xs sm:text-sm"
                        href="#"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex justify-center items-center bg-cyan-500 rounded-full text-white text-xs sm:text-sm"
                        href="#"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex justify-center items-center bg-purple-500 rounded-full text-white text-xs sm:text-sm"
                        href="#"
                      >
                        <FaLinkedin />
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex justify-center items-center bg-blue-500 rounded-full text-white text-xs sm:text-sm"
                        href="#"
                      >
                        <FaGithub />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {product.stock ? (
                  <button
                    onClick={buynow}
                    className="px-4 sm:px-6 py-2 h-[40px] cursor-pointer bg-green-600 text-white rounded-lg text-sm whitespace-nowrap"
                  >
                    Buy Now
                  </button>
                ) : null}
                <Link
                  to={`/dashboard/chat/${product.sellerId}`}
                  className="px-4 sm:px-6 py-2 h-[40px] cursor-pointer bg-primary-500 text-white rounded-lg flex items-center text-sm whitespace-nowrap"
                >
                  Chat Seller
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews & Description Section */}
      <section>
        <div className="container min-w-full mx-auto px-3 md:px-4 pb-8">
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <button
              onClick={() => setState("reviews")}
              className={`py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm ${
                state === "reviews"
                  ? "bg-primary-500 text-white"
                  : "bg-bg-light text-text-700"
              }`}
            >
              Reviews
            </button>

            <button
              onClick={() => setState("description")}
              className={`py-2 px-2 sm:px-4 rounded-lg text-xs sm:text-sm ${
                state === "description"
                  ? "bg-primary-500 text-white"
                  : "bg-bg-light text-text-700"
              }`}
            >
              Description
            </button>
          </div>

          <div className="mt-3">
            {state === "reviews" ? (
              <Reviews product={product} />
            ) : (
              <div className="p-3 sm:p-4 bg-bg-light rounded-lg border border-border">
                <p className="text-text-700 leading-relaxed text-xs sm:text-sm">
                  {product.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <div className="min-w-full mx-auto">
        <Products title="Related Products" products={relatedProducts} />
      </div>

      {/* More Products from Shop */}
      <div className="min-w-full mx-auto pb-8">
        <Products
          title={`More from ${product.shopName}`}
          products={moreProducts}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Details;
