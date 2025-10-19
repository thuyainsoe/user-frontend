import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";

const Banner = () => {
  // Banner data using local images from public/images/banner
  const banners = [
    {
      id: 1,
      link: "/shop",
      banner: "/images/banner/1.jpg",
      title: "New Collection",
      subtitle: "Discover the latest trends",
    },
    {
      id: 2,
      link: "/shop",
      banner: "/images/banner/2.jpg",
      title: "Special Offers",
      subtitle: "Up to 50% off",
    },
    {
      id: 3,
      link: "/shop",
      banner: "/images/banner/3.jpg",
      title: "Featured Products",
      subtitle: "Shop the best sellers",
    },
    {
      id: 4,
      link: "/shop",
      banner: "/images/banner/4.jpg",
      title: "Summer Sale",
      subtitle: "Limited time offer",
    },
    {
      id: 5,
      link: "/shop",
      banner: "/images/banner/5.jpg",
      title: "Premium Quality",
      subtitle: "Shop with confidence",
    },
    {
      id: 6,
      link: "/shop",
      banner: "/images/banner/6.jpg",
      title: "Exclusive Deals",
      subtitle: "Best prices guaranteed",
    },
  ];

  // Responsive breakpoints for Carousel
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full bg-bg-light py-3">
      <div className="min-w-full relative container">
        <Carousel
          autoPlay
          autoPlaySpeed={4000}
          infinite
          arrows={true}
          showDots={true}
          responsive={responsive}
          containerClass="rounded-lg overflow-hidden shadow-md"
          itemClass="px-0"
          removeArrowOnDeviceType={["mobile"]}
          customLeftArrow={
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-primary-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10"
              aria-label="Previous slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          }
          customRightArrow={
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/80 hover:bg-white text-primary-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-10 "
              aria-label="Next slide"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          }
          customDot={
            <button className="inline-block w-3 h-3 mx-1 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300" />
          }
          renderDotsOutside={false}
        >
          {banners.map((banner) => (
            <Link
              key={banner.id}
              to={banner.link}
              className="block relative group overflow-hidden rounded-lg"
            >
              <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] xl:h-[550px]">
                <img
                  src={banner.banner}
                  alt={banner.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                  loading="lazy"
                />
                {/* Gradient overlay for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Banner text overlay */}
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 text-white z-10">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">
                    {banner.title}
                  </h2>
                  <p className="text-sm md:text-lg lg:text-xl drop-shadow-lg mb-4">
                    {banner.subtitle}
                  </p>
                  <button className="px-6 py-2 md:px-8 md:py-3 bg-secondary-500 hover:bg-[#a0471a] text-white font-medium rounded-md transition-colors duration-300 shadow-lg">
                    Shop Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div>

      {/* Custom styles for carousel dots */}
      <style>{`
        .react-multi-carousel-dot-list {
          position: absolute;
          bottom: 16px;
          display: flex;
          left: 0;
          right: 0;
          justify-content: center;
          margin: auto;
          padding: 0;
          list-style: none;
          text-align: center;
        }

        .react-multi-carousel-dot button {
          display: inline-block;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          opacity: 1;
          padding: 0;
          box-shadow: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          margin: 0 4px;
          cursor: pointer;
        }

        .react-multi-carousel-dot--active button {
          width: 32px;
          border-radius: 6px;
          background: #2f855a;
        }

        .react-multi-carousel-dot button:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .react-multi-carousel-dot--active button:hover {
          background: #2f855a;
        }

        .react-multi-carousel-list {
          padding: 0 !important;
        }

        @media (max-width: 768px) {
          .react-multi-carousel-dot-list {
            bottom: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
