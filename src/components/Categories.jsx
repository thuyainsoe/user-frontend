import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Categories = () => {
  // Category data using local images from public/images/products
  const categories = [
    {
      id: 1,
      name: "Electronics",
      image: "/images/products/1.webp",
      link: "/products?category=Electronics",
    },
    {
      id: 2,
      name: "Fashion",
      image: "/images/products/2.webp",
      link: "/products?category=Fashion",
    },
    {
      id: 3,
      name: "Home & Kitchen",
      image: "/images/products/3.webp",
      link: "/products?category=Home & Kitchen",
    },
    {
      id: 4,
      name: "Beauty",
      image: "/images/products/4.webp",
      link: "/products?category=Beauty",
    },
    {
      id: 5,
      name: "Sports",
      image: "/images/products/5.webp",
      link: "/products?category=Sports",
    },
    {
      id: 6,
      name: "Books",
      image: "/images/products/6.webp",
      link: "/products?category=Books",
    },
    {
      id: 7,
      name: "Toys",
      image: "/images/products/7.webp",
      link: "/products?category=Toys",
    },
    {
      id: 8,
      name: "Automotive",
      image: "/images/products/8.webp",
      link: "/products?category=Automotive",
    },
  ];

  // Responsive breakpoints for Carousel - matching Banner component
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="min-w-full bg-white py-2">
      <div className="container min-w-full">
        {/* Section Title - matching design system */}
        <div className="text-left mb-4">
          <h2 className="text-base md:text-xl font-medium text-text-900 mb-2">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-primary-500 mr-auto rounded-full"></div>
          <p className="text-text-600 mt-2 text-sm md:text-base">
            Discover our wide range of products across different categories
          </p>
        </div>

        {/* Categories Carousel */}
        <div className="relative">
          <Carousel
            autoPlay
            autoPlaySpeed={3000}
            infinite
            arrows={true}
            responsive={responsive}
            containerClass="pb-4"
            itemClass="px-1"
            removeArrowOnDeviceType={["mobile"]}
            customLeftArrow={
              <button
                className="absolute left-2 cursor-pointer top-1/2 -translate-y-1/2 w-8 h-8 bg-white  text-primary-500  rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 border border-border"
                aria-label="Previous categories"
              >
                <ChevronLeft size={18} />
              </button>
            }
            customRightArrow={
              <button
                className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white  text-primary-500  rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 border border-border"
                aria-label="Next categories"
              >
                <ChevronRight size={18} />
              </button>
            }
          >
            {categories.map((category) => (
              <Link
                key={category.id}
                to={category.link}
                className="block group"
              >
                <div className="bg-white border border-border rounded-lg overflow-hidden transition-all duration-300">
                  {/* Image Container */}
                  <div className="relative w-full h-[160px] md:h-[180px] overflow-hidden bg-bg-light">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 "
                      loading="lazy"
                    />
                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Category Name */}
                  <div className="p-3 md:p-4 text-center bg-white">
                    <h3 className="text-sm text-text-900 group-hover:text-primary-500 transition-colors duration-300">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Custom styles for carousel */}
      <style>{`
        .react-multi-carousel-list {
          padding: 10px 0;
        }

        .react-multi-carousel-track {
          display: flex;
          align-items: center;
        }

        @media (max-width: 768px) {
          .react-multi-carousel-list {
            padding: 5px 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Categories;
