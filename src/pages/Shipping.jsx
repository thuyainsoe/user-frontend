import React, { useState } from "react";

// --- Mock Data ---
// This data replaces what was coming from useLocation() and useSelector()
import Header from "../components/Header";
import Footer from "../components/Footer";
const mockProducts = [
  {
    shopName: "GreenLeaf Organics",
    products: [
      {
        productInfo: {
          id: 1,
          name: "Organic Avocados (Pack of 3)",
          brand: "GreenLeaf",
          images: ["/images/products/1.webp"],
          price: 6,
          discount: 10,
        },
      },
      {
        productInfo: {
          id: 2,
          name: "Fresh Strawberries (1 lb)",
          brand: "FarmFresh",
          images: ["/images/products/2.webp"],
          price: 5,
          discount: 0,
        },
      },
    ],
  },
  {
    shopName: "TechWorld Electronics",
    products: [
      {
        productInfo: {
          id: 3,
          name: "Wireless Noise-Cancelling Headphones",
          brand: "AudioTech",
          images: ["/images/products/3.webp"],
          price: 149,
          discount: 15,
        },
      },
    ],
  },
];

const mockPrice = 160; // Sum of item prices (6 + 5 + 149)
const mockShippingFee = 12;
const mockItems = 3; // Total number of items
const mockUserInfo = {
  id: "user-abc-123",
  email: "ariyan@gmail.com", // From the original code's static text
};
// --- End Mock Data ---

/**
 * Main App component demonstrating the shipping page UI.
 * This is a self-contained component with no external dependencies
 * besides React and Tailwind CSS (assumed to be available).
 */
export default function App() {
  const [res, setRes] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [state, setState] = useState({
    name: "",
    address: "",
    phone: "",
    post: "",
    province: "",
    city: "",
    area: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const save = (e) => {
    e.preventDefault();
    const { name, address, phone, post, province, city, area } = state;
    // Simple validation: check if all fields are non-empty
    if (name && address && phone && post && province && city && area) {
      setRes(true);
      setOrderPlaced(false); // Hide order success message if they are editing
    } else {
      // You could add error handling here
      console.warn("All fields are required");
    }
  };

  const placeOrder = () => {
    if (!res) return; // Button should be disabled, but as a safeguard

    // This replaces the dispatch() call
    console.log("--- PLACING ORDER (MOCK) ---");
    console.log("User ID:", mockUserInfo.id);
    console.log("Total Price:", mockPrice);
    console.log("Shipping Fee:", mockShippingFee);
    console.log("Total Items:", mockItems);
    console.log("Shipping Info:", state);
    console.log("Products:", mockProducts);

    setOrderPlaced(true);
    // Hide the success message after 4 seconds
    setTimeout(() => {
      setOrderPlaced(false);
    }, 4000);
  };

  // Calculate total price from mock data
  const totalPayment = mockPrice + mockShippingFee;

  return (
    <div>
      <Header />

      {/* --- Main Content Section --- */}
      <section className="py-3 bg-bg-light">
        <div className="container min-w-full mx-auto px-3 md:px-4">
          {/* Responsive layout: stack on mobile, side-by-side on large screens */}
          <div className="w-full flex flex-col md:flex-row gap-3">
            {/* --- Left Column: Shipping & Products --- */}
            <div className="w-full md:w-8/12 lg:w-9/12">
              <div className="space-y-3">
                {/* --- Shipping Information Form --- */}
                <div className="bg-white p-3 rounded-lg border border-border">
                  <h2 className="text-text-900 font-bold pb-3 text-lg">
                    Shipping Information
                  </h2>

                  {!res && (
                    <form onSubmit={save}>
                      <div className="grid md:grid-cols-2 gap-3 text-text-700">
                        <div className="flex flex-col gap-1">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.name}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="name"
                            id="name"
                            placeholder="Full Name"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="address"
                            className="text-sm font-medium"
                          >
                            Address
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.address}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="address"
                            id="address"
                            placeholder="Street Address"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="phone"
                            className="text-sm font-medium"
                          >
                            Phone
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.phone}
                            type="tel"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="post" className="text-sm font-medium">
                            Post / Zip Code
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.post}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="post"
                            id="post"
                            placeholder="Postal Code"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label
                            htmlFor="province"
                            className="text-sm font-medium"
                          >
                            State / Province
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.province}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="province"
                            id="province"
                            placeholder="State / Province"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <label htmlFor="city" className="text-sm font-medium">
                            City
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.city}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="city"
                            id="city"
                            placeholder="City"
                            required
                          />
                        </div>

                        <div className="flex flex-col gap-1">
                          <label htmlFor="area" className="text-sm font-medium">
                            Area / Neighborhood
                          </label>
                          <input
                            onChange={inputHandle}
                            value={state.area}
                            type="text"
                            className="w-full px-3 py-2 border border-border outline-0 focus:border-primary-500 rounded text-sm"
                            name="area"
                            id="area"
                            placeholder="Area or Neighborhood"
                            required
                          />
                        </div>
                        <div className="flex items-end md:cols-span-2">
                          <button
                            type="submit"
                            className="w-full px-3 py-2 rounded bg-primary-500 hover:bg-primary-600 text-white text-sm font-medium transition-colors"
                          >
                            Save Information
                          </button>
                        </div>
                      </div>
                    </form>
                  )}

                  {res && (
                    <div className="flex flex-col gap-2">
                      <h2 className="text-text-900 font-semibold text-base">
                        Deliver To: {state.name}
                      </h2>
                      <p className="leading-relaxed text-sm">
                        <span className="bg-primary-100 text-primary-800 text-xs font-medium mr-2 px-2 py-1 rounded">
                          Home
                        </span>
                        <span className="text-text-700">
                          {state.phone} - {state.address}, {state.area},{" "}
                          {state.city}, {state.province}, {state.post}
                        </span>
                        <span
                          onClick={() => setRes(false)}
                          className="text-primary-500 cursor-pointer font-medium ml-2 hover:underline"
                        >
                          (Change)
                        </span>
                      </p>
                      <p className="text-text-600 text-xs">
                        Email To: {mockUserInfo.email}
                      </p>
                    </div>
                  )}
                </div>

                {/* --- Product List --- */}
                {mockProducts.map((p, i) => (
                  <div
                    key={i}
                    className="bg-white p-3 rounded-lg border border-border space-y-3"
                  >
                    <div className="flex justify-start items-center">
                      <h2 className="text-base text-text-900 font-bold">
                        {p.shopName}
                      </h2>
                    </div>

                    {p.products.map((pt, j) => (
                      <div
                        key={j}
                        className="w-full flex flex-col md:flex-row md:items-center border-t border-border pt-3 gap-3"
                      >
                        {/* Product Info */}
                        <div className="flex gap-3 flex-1 min-w-0">
                          <img
                            className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-cover border border-border flex-shrink-0"
                            src={pt.productInfo.images[0]}
                            alt={pt.productInfo.name}
                            onError={(e) => {
                              e.target.src =
                                "https://placehold.co/80x80/f87171/ffffff?text=Error";
                            }}
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

                        {/* Price Info */}
                        <div className="flex-shrink-0 text-right">
                          <h2 className="text-base md:text-lg font-bold text-secondary-500">
                            $
                            {(
                              pt.productInfo.price -
                              Math.floor(
                                (pt.productInfo.price *
                                  pt.productInfo.discount) /
                                  100
                              )
                            ).toFixed(2)}
                          </h2>
                          {pt.productInfo.discount > 0 && (
                            <>
                              <p className="line-through text-xs md:text-sm text-text-500">
                                ${pt.productInfo.price.toFixed(2)}
                              </p>
                              <p className="text-xs text-green-600 font-medium">
                                -{pt.productInfo.discount}% OFF
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* --- Right Column: Order Summary --- */}
            <div className="w-full md:w-4/12 lg:w-3/12">
              <div className="bg-white rounded-lg p-4 border border-border">
                <h2 className="text-lg font-bold text-text-900 mb-3">
                  Order Summary
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-text-700">
                    <span className="text-sm">{mockItems} Items</span>
                    <span className="font-medium">${mockPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-text-700">
                    <span className="text-sm">Shipping Fee</span>
                    <span className="font-medium">
                      ${mockShippingFee.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-bold text-text-900">Total</span>
                    <span className="text-xl font-bold text-primary-500">
                      ${totalPayment.toFixed(2)}
                    </span>
                  </div>

                  <button
                    onClick={placeOrder}
                    disabled={!res}
                    className={`w-full px-5 py-3 rounded text-sm text-white font-medium uppercase transition-all
                      ${
                        res
                          ? "bg-secondary-500 hover:bg-secondary-600 hover:shadow-lg"
                          : "bg-gray-300 cursor-not-allowed"
                      }
                    `}
                  >
                    Place Order
                  </button>

                  {/* Order Placed Success Message */}
                  {orderPlaced && (
                    <div className="p-3 bg-green-100 text-green-700 border border-green-300 rounded text-center text-sm">
                      Order placed successfully!
                    </div>
                  )}

                  {!res && (
                    <div className="p-3 bg-yellow-100 text-yellow-800 rounded text-xs text-center">
                      Please save your shipping information to place an order.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
