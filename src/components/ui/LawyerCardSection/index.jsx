import Slider from "react-slick";
import LawyerCard from "./LawyerCard";

function NextArrow() {
  return (
    <div
      className={`grid place-items-center w-[42px] h-[42px] shadow-[0px_4px_7px_rgba(151,151,151,0.25)] bg-white rounded-[42px] text-[16px] cursor-pointer max-md:hidden`}
    >
      <img src="/right-arrow.svg" alt="right arrow" />
    </div>
  );
}

function PrevArrow() {
  return (
    <div
      className={`grid place-items-center w-[42px] h-[42px] shadow-[0px_4px_7px_rgba(151,151,151,0.25)] bg-white rounded-[42px] text-[16px] cursor-pointer max-md:hidden`}
    >
      <img src="/left-arrow.svg" alt="left arrow" />
    </div>
  );
}

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrow: false,

  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "24px",
        infinite: false,
        arrow: false,
      },
    },
  ],
};

const LawyerCardsSection = (props) => {
  const { data } = props;
  return (
    <section className="md:my-[105px] md:mb-8 max-md:mt-12 relative">
      <div className="max-w-[1200px] m-auto">
        <h2 className="max-md:my-0 max-md:mx-4 font-bold text-[27px] md:text-[36px] leading-[42px] text-start md:text-center mb-4 md:mb-10">
          {data.title}
        </h2>
        <div className="md:m-auto">
          <Slider {...settings}>
            {data.profiles.map((profile, index) => (
              <LawyerCard key={index} profile={profile} />
            ))}
          </Slider>
        </div>
      </div>
      <div className="max-md:hidden absolute top-0 left-0 overflow-hidden -z-50">
        <img
          src="/partners-section-gradient.svg"
          alt="partners-section-gradient.svg"
          className="w-full"
        />
      </div>
    </section>
  );
};

export default LawyerCardsSection;
