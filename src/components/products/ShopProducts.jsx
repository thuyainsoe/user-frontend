import React from "react";
import { Link } from "react-router-dom";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { RiShoppingCartLine } from "react-icons/ri";
import Rating from "../Rating";

const ShopProducts = ({ products }) => {
  return (
    <div className="w-full grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-2">
      {products.map((p, i) => (
        <div
          key={i}
          className="flex flex-col justify-start items-start w-full bg-white border border-border rounded-lg overflow-hidden transition-all duration-300 group hover:shadow-lg"
        >
          {/* Image Container */}
          <div className="w-full relative overflow-hidden">
            {/* Discount Badge */}
            {p.discount && (
              <div className="flex justify-center items-center absolute text-white w-[38px] h-[38px] rounded-full bg-red-500 text-xs font-semibold left-2 top-2 z-10">
                {p.discount}%
              </div>
            )}

            {/* Image */}
            <div className="relative w-full aspect-square overflow-hidden bg-bg-light">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
              />
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Action Buttons */}
            <ul className="flex transition-all duration-700 -bottom-10 justify-center items-center gap-2 absolute w-full group-hover:bottom-3 z-10">
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white  border border-border transition-all">
                <FaRegHeart />
              </li>
              <Link
                to={`/product/details/${p.slug}`}
                className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white  border border-border transition-all"
              >
                <FaEye />
              </Link>
              <li className="w-[38px] h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-primary-500 hover:text-white  border border-border transition-all">
                <RiShoppingCartLine />
              </li>
            </ul>
          </div>

          {/* Product Info */}
          <div className="flex justify-start items-start flex-col gap-2 p-3 md:p-4 bg-white w-full">
            <h2 className="text-sm md:text-base font-medium text-text-900 group-hover:text-primary-500 transition-colors duration-300 line-clamp-2">
              {p.name}
            </h2>
            <div className="flex justify-start items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                {p.discount ? (
                  <>
                    <span className="text-base md:text-lg font-semibold text-primary-500">
                      ${(p.price * (1 - p.discount / 100)).toFixed(2)}
                    </span>
                    <span className="text-sm text-text-500 line-through">
                      ${p.price}
                    </span>
                  </>
                ) : (
                  <span className="text-base md:text-lg font-semibold text-text-900">
                    ${p.price}
                  </span>
                )}
              </div>
              <div className="flex">
                <Rating ratings={p.rating} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
