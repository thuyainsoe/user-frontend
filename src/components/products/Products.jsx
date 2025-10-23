import { Link } from "react-router-dom";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";
import toast from "react-hot-toast";
import { useState } from "react";

const Products = ({ title, products }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  const addToWishlist = (product) => {
    if (wishlist.some((item) => item._id === product._id)) {
      toast.error("Already in wishlist!");
    } else {
      setWishlist([...wishlist, product]);
      toast.success("Added to wishlist!");
    }
  };

  const addToCart = (product) => {
    if (cart.some((item) => item._id === product._id)) {
      toast.error("Already in cart!");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      toast.success("Added to cart!");
    }
  };

  return (
    <div className="min-w-full bg-white py-2">
      <div className="container min-w-full">
        {/* Section Title - matching FeatureProduct design system */}
        <div className="text-left mb-4">
          <h2 className="text-base md:text-xl font-medium text-text-900 mb-2">
            {title}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mr-auto rounded-full"></div>
        </div>

        {/* Products Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
          {products.map((product, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 group hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                {/* Discount Badge */}
                {product.discount ? (
                  <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs left-2 top-2 z-10">
                    {product.discount}%
                  </div>
                ) : null}

                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden bg-bg-light">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500"
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                  />
                  {/* Gradient Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Action Buttons */}
                <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3 z-10">
                  <li
                    onClick={() => addToWishlist(product)}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white shadow-md border border-border"
                  >
                    <FaRegHeart />
                  </li>
                  <Link
                    to={`/product/details/${product.slug}`}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white shadow-md border border-border"
                  >
                    <FaEye />
                  </Link>
                  <li
                    onClick={() => addToCart(product)}
                    className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white shadow-md border border-border"
                  >
                    <RiShoppingCartLine />
                  </li>
                </ul>
              </div>

              {/* Product Info */}
              <div className="p-3 md:p-4 bg-white">
                <h2 className="text-sm text-text-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                  {product.name}
                </h2>
                <div className="flex justify-start items-center gap-3">
                  <span className="text-md text-text-900">
                    ${product.price}
                  </span>
                  <div className="flex">
                    <Rating ratings={product.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
