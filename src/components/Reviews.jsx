import React, { useState } from "react";
import Rating from "./Rating";
import RatingTemp from "./RatingTemp";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import RatingReact from "react-rating";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

// Mock Data
const mockReviews = [
  {
    rating: 5,
    date: "2024-01-15",
    name: "John Doe",
    review:
      "Excellent product! Exceeded my expectations. The quality is outstanding and delivery was fast.",
  },
  {
    rating: 4,
    date: "2024-01-10",
    name: "Jane Smith",
    review:
      "Great value for money. Highly recommended for anyone looking for quality products.",
  },
  {
    rating: 5,
    date: "2024-01-08",
    name: "Mike Johnson",
    review:
      "Perfect! Exactly what I was looking for. Will definitely buy again.",
  },
  {
    rating: 3,
    date: "2024-01-05",
    name: "Sarah Williams",
    review: "Good product overall but shipping took longer than expected.",
  },
  {
    rating: 4,
    date: "2024-01-02",
    name: "David Brown",
    review: "Very satisfied with the purchase. Quality meets the description.",
  },
];

const mockRatingReview = [
  { sum: 45 }, // 5 stars
  { sum: 30 }, // 4 stars
  { sum: 15 }, // 3 stars
  { sum: 8 }, // 2 stars
  { sum: 2 }, // 1 star
];

const Reviews = ({ product = {} }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [parPage] = useState(5);
  const [rat, setRat] = useState("");
  const [re, setRe] = useState("");

  // Mock user info (set to null to show login prompt, or add mock user)
  const userInfo = null; // Change to { name: 'John Doe' } to test logged in state

  const productRating = product.rating || 4.5;
  const totalReview = mockReviews.length;

  const review_submit = (e) => {
    e.preventDefault();
    alert(`Review submitted!\nRating: ${rat}\nReview: ${re}`);
    setRat("");
    setRe("");
  };

  return (
    <div className="mt-6">
      <div className="flex gap-10 md-lg:flex-col">
        {/* Overall Rating */}
        <div className="flex flex-col gap-2 justify-start items-start py-4">
          <div>
            <span className="text-5xl md:text-6xl font-semibold text-text-900">
              {productRating}
            </span>
            <span className="text-2xl md:text-3xl font-semibold text-text-600">
              /5
            </span>
          </div>
          <div className="flex text-2xl md:text-3xl">
            <Rating ratings={productRating} />
          </div>
          <p className="text-sm text-text-600">({totalReview}) Reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="flex gap-2 flex-col py-4 flex-1">
          {[5, 4, 3, 2, 1].map((starCount, idx) => (
            <div
              key={starCount}
              className="flex justify-start items-center gap-3 md:gap-5"
            >
              <div className="text-sm md:text-md flex gap-1 w-[70px] md:w-[93px]">
                <RatingTemp rating={starCount} />
              </div>
              <div className="w-full max-w-[200px] h-[14px] bg-bg-light border border-border rounded-full relative overflow-hidden">
                <div
                  style={{
                    width: `${Math.floor(
                      (100 * (mockRatingReview[idx]?.sum || 0)) / 100
                    )}%`,
                  }}
                  className="h-full bg-[#Edbb0E] transition-all duration-300"
                />
              </div>
              <p className="text-sm text-text-600 w-[30px]">
                {mockRatingReview[idx]?.sum || 0}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <h2 className="text-text-900 text-lg md:text-xl font-bold py-4 md:py-5 border-t border-border mt-4">
        Product Reviews ({totalReview})
      </h2>

      <div className="flex flex-col gap-3 pt-2">
        {mockReviews.map((r, i) => (
          <div
            key={i}
            className="flex flex-col gap-2 p-4 bg-bg-light rounded-lg border border-border"
          >
            <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-2">
              <div className="flex gap-1 text-lg md:text-xl">
                <RatingTemp rating={r.rating} />
              </div>
              <span className="text-text-600 text-xs md:text-sm">{r.date}</span>
            </div>
            <span className="text-text-900 text-sm md:text-md font-semibold">
              {r.name}
            </span>
            <p className="text-text-700 text-sm leading-relaxed">{r.review}</p>
          </div>
        ))}

        <div className="flex justify-end mt-2">
          {totalReview > 5 && (
            <Pagination
              pageNumber={pageNumber}
              setPageNumber={setPageNumber}
              totalItem={totalReview}
              parPage={parPage}
              showItem={Math.floor(totalReview / 3)}
            />
          )}
        </div>
      </div>

      {/* Review Form */}
      <div className="border-t border-border pt-3">
        {userInfo ? (
          <div className="flex flex-col gap-4">
            <h3 className="text-text-900 font-semibold text-base md:text-lg">
              Write a Review
            </h3>
            <div className="flex gap-1">
              <RatingReact
                onChange={(e) => setRat(e)}
                initialRating={rat}
                emptySymbol={
                  <span className="text-text-400 text-3xl md:text-4xl">
                    <CiStar />
                  </span>
                }
                fullSymbol={
                  <span className="text-[#Edbb0E] text-3xl md:text-4xl">
                    <FaStar />
                  </span>
                }
              />
            </div>
            <form onSubmit={review_submit} className="flex flex-col gap-3">
              <textarea
                value={re}
                onChange={(e) => setRe(e.target.value)}
                required
                className="border border-border rounded-lg outline-none p-3 w-full focus:border-primary-500 transition-colors text-sm"
                placeholder="Share your thoughts about this product..."
                rows="5"
              />
              <div>
                <button className="px-6 py-2 md:py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors font-medium text-sm md:text-base">
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-bg-light border border-border rounded-lg p-6 text-center">
            <p className="text-text-700 mb-4">Please login to write a review</p>
            <Link
              to="/login"
              className="inline-block px-6 py-2 md:py-3 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors font-medium text-sm md:text-base"
            >
              Login to Review
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reviews;
