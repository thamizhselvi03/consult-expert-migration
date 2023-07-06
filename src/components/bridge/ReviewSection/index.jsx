import Slider from 'react-slick';
import ReviewProfileCard from '@/components/ui/ReviewProfileCard';

const settings = {
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrow: false,
        centerMode: true,
        centerPadding: '24px',
      },
    },
  ],
};

const ReviewsSection = (props) => {
  const { isMobile, data } = props;
  return (
    <section className="mt-[13px] py-16 px-10 md:px-4 bg-gradient-to-b from-[#fffdf1] to-[#fffdf5]/0 rounded">
      <h2 className="text-start text-[27px] mb-4 md:text-center md:text-[36px] md:mb-10 font-[700] leading-[42px]">{data.title}</h2>
      <Slider {...settings} className='m-auto min-w-full md:ml-10'>
        {data.cards.map((profile, index) => (
          <ReviewProfileCard key={index} profile={profile} />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
