import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const Cart = () => {
  // 🧠 Mock Data (for UI only)
  const card_products = [
    {
      shopName: "Tech Store",
      products: [
        {
          productInfo: {
            name: "Gaming Headset",
            brand: "HyperX",
            price: 120,
            discount: 20,
            stock: 10,
            images: ["/images/products/1.webp"],
          },
          quantity: 1,
        },
        {
          productInfo: {
            name: "Mechanical Keyboard",
            brand: "Razer",
            price: 150,
            discount: 10,
            stock: 5,
            images: ["/images/products/2.webp"],
          },
          quantity: 2,
        },
      ],
    },
  ];

  const outofstock_products = [
    {
      products: [
        {
          name: "Wireless Mouse",
          brand: "Logitech",
          price: 80,
          discount: 15,
          images: ["/images/products/3.webp"],
        },
      ],
      quantity: 1,
    },
  ];

  const price = 300;
  const buy_product_item = 3;
  const shipping_fee = 15;

  return (
    <div>
      <Header />

      {/* 🛒 Cart Section */}
      <section className="py-3 bg-bg-light">
        <div className="container min-w-full mx-auto px-3 md:px-4">
          <div className="w-full flex flex-col md:flex-row gap-3">
            {/* Left - Cart Products */}
            <div className="w-full md:w-8/12 lg:w-9/12">
              <div className="space-y-3">
                {/* Stock Products */}
                <div className="bg-white rounded-lg p-4 border border-border">
                  <h2 className="text-base text-green-600 font-semibold">
                    Stock Products ({card_products.length})
                  </h2>
                </div>

                {card_products.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg p-4 border border-border space-y-3"
                  >
                    <div className="flex justify-start items-center">
                      <h2 className="text-base text-text-900 font-bold">
                        {p.shopName}
                      </h2>
                    </div>

                    {p.products.map((pt, index) => (
                      <div
                        key={index}
                        className="w-full flex flex-col md:flex-row md:items-center border-b border-border last:border-b-0 pb-3 last:pb-0 gap-3"
                      >
                        {/* Product Info */}
                        <div className="flex gap-3 flex-1 min-w-0">
                          <img
                            className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border border-border flex-shrink-0"
                            src={pt.productInfo.images[0]}
                            alt={pt.productInfo.name}
                          />
                          <div className="text-text-700 flex-1 min-w-0">
                            <h2 className="text-sm font-semibold text-text-900 mb-1 truncate">
                              {pt.productInfo.name}
                            </h2>
                            <span className="text-xs text-text-600">
                              Brand: {pt.productInfo.brand}
                            </span>
                          </div>
                        </div>

                        {/* Price & Actions */}
                        <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
                          {/* Price */}
                          <div className="flex-shrink-0">
                            <h2 className="text-base md:text-lg font-bold text-secondary-500">
                              $
                              {pt.productInfo.price -
                                Math.floor(
                                  (pt.productInfo.price *
                                    pt.productInfo.discount) /
                                    100
                                )}
                            </h2>
                            <p className="line-through text-xs md:text-sm text-text-500">
                              ${pt.productInfo.price}
                            </p>
                            <p className="text-xs text-green-600 font-medium">
                              -{pt.productInfo.discount}% OFF
                            </p>
                          </div>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2">
                            <div className="flex bg-bg-light border border-border h-8 justify-center items-center rounded overflow-hidden">
                              <button className="px-2 md:px-3 h-full hover:bg-border cursor-pointer transition-colors text-sm">
                                -
                              </button>
                              <div className="px-3 md:px-4 h-full flex items-center bg-white border-x border-border font-medium text-sm">
                                {pt.quantity}
                              </div>
                              <button className="px-2 md:px-3 h-full hover:bg-border cursor-pointer transition-colors text-sm">
                                +
                              </button>
                            </div>

                            {/* Delete Icon Button */}
                            <button className="w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded transition-colors flex-shrink-0">
                              <FaTrash className="text-xs" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}

                {/* Out of Stock */}
                {outofstock_products.length > 0 && (
                  <>
                    <div className="bg-white rounded-lg p-4 border border-border">
                      <h2 className="text-base text-red-600 font-semibold">
                        Out of Stock ({outofstock_products.length})
                      </h2>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-border space-y-3">
                      {outofstock_products.map((p, i) => (
                        <div
                          key={i}
                          className="w-full flex flex-col md:flex-row md:items-center border-b border-border last:border-b-0 pb-3 last:pb-0 gap-3 opacity-60"
                        >
                          {/* Product Info */}
                          <div className="flex gap-3 flex-1 min-w-0">
                            <div className="relative flex-shrink-0">
                              <img
                                className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border border-border"
                                src={p.products[0].images[0]}
                                alt={p.products[0].name}
                              />
                              <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                                <span className="text-white text-xs font-bold bg-red-500 px-2 py-1 rounded">
                                  OUT
                                </span>
                              </div>
                            </div>
                            <div className="text-text-700 flex-1 min-w-0">
                              <h2 className="text-sm font-semibold text-text-900 mb-1 truncate">
                                {p.products[0].name}
                              </h2>
                              <span className="text-xs text-text-600">
                                Brand: {p.products[0].brand}
                              </span>
                            </div>
                          </div>

                          {/* Price & Actions */}
                          <div className="flex items-center justify-between md:justify-end gap-3 md:gap-4">
                            {/* Price */}
                            <div className="flex-shrink-0">
                              <h2 className="text-base md:text-lg font-bold text-text-500">
                                $
                                {p.products[0].price -
                                  Math.floor(
                                    (p.products[0].price *
                                      p.products[0].discount) /
                                      100
                                  )}
                              </h2>
                              <p className="line-through text-xs md:text-sm text-text-400">
                                ${p.products[0].price}
                              </p>
                              <p className="text-xs text-text-500">
                                -{p.products[0].discount}% OFF
                              </p>
                            </div>

                            {/* Delete Icon Button */}
                            <button className="w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 text-white rounded transition-colors flex-shrink-0">
                              <FaTrash className="text-xs" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Right - Order Summary */}
            <div className="w-full md:w-4/12 lg:w-3/12">
              <div className="bg-white rounded-lg p-4 border border-border">
                <h2 className="text-lg font-bold text-text-900 mb-3">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-text-700">
                    <span className="text-sm">{buy_product_item} Items</span>
                    <span className="font-medium">${price}</span>
                  </div>
                  <div className="flex justify-between items-center text-text-700">
                    <span className="text-sm">Shipping Fee</span>
                    <span className="font-medium">${shipping_fee}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <div className="flex gap-2">
                      <input
                        className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                        type="text"
                        placeholder="Voucher Code"
                      />
                      <button className="px-4 py-2 bg-primary-500 text-white rounded text-sm font-medium hover:bg-primary-600 transition-colors">
                        Apply
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-bold text-text-900">Total</span>
                    <span className="text-xl font-bold text-primary-500">
                      ${price + shipping_fee}
                    </span>
                  </div>
                  <button className="w-full px-5 py-3 rounded hover:shadow-lg bg-secondary-500 hover:bg-secondary-600 text-sm text-white font-medium uppercase transition-all">
                    Proceed to Checkout ({buy_product_item})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
