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
    <section className="reviews-section">
      <h2 className="section-title">{data.title}</h2>
      <Slider {...settings} className="reviews-container">
        {data.cards.map((profile, index) => (
          <ReviewProfileCard key={index} profile={profile} />
        ))}
      </Slider>
    </section>
  );
};

export default ReviewsSection;
