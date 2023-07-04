import { useState, useEffect } from "react";

const ReviewContainer = ({ isMobile, data }) => {
  const reviewsCount = data.totalCases;
  const [count, setCount] = useState(0);
  const duration = 0;

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector("#talk-to-lawyer-cases-resolved");
      const position = element.getBoundingClientRect();
      if (position.top >= 0 && position.bottom <= window.innerHeight) {
        let start = 0;
        const end = parseInt(reviewsCount.substring(0, 3));
        if (start === end) return;

        let timer = setInterval(() => {
          start += 1;
          setCount(String(start) + reviewsCount.substring(3));
          if (start === end) clearInterval(timer);
        }, duration);

        window.removeEventListener("scroll", handleScroll, true);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className="flex justify-between gap-[10px] md:gap-[30px] max-md:w-full">
      <div className="flex flex-col justify-between items-center shadow-[0px_0px_9px_rgba(148,148,148,0.25)] bg-white rounded p-3 w-[206px] h-[97px]">
        <div className="flex justify-between items-center w-full">
          <h4 className="m-0 font-bold text-[26px] md:text-[34px] leading-10">
            4.3
          </h4>
          <div className="flex">
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/star.svg" alt="star" />
            <img src="/half-star.svg" alt="star" />
          </div>
        </div>
        <div className="flex justify-around w-full">
          <p className="text-[12px] md:text-[14px] font-[600] text-[#606162]">
            ({data.totalReviews} reviews)
          </p>
          <img
            src="https://assets.vakilsearch.com/live-images/google_logo.svg"
            alt="google"
            className="mb-[6px] h-[20px]"
          />
        </div>
      </div>
      <div
        className="flex flex-col justify-between shadow-[0px_0px_9px_rgba(148,148,148,0.25)] bg-white rounded p-3 w-[206px] h-[97px]"
        id="talk-to-lawyer-cases-resolved"
      >
        <h4 className="text-[26px] md:text-[34px] font-bold leading-10">
          {count}+
        </h4>
        <p className="text-[12px] md:text-[14px] font-[600] text-[#606162]">
          Cases resolved
        </p>
      </div>
    </div>
  );
};

export default ReviewContainer;
