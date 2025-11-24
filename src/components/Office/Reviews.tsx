import { reviewsData } from "../../data/reviewsData";
import ReviewCard from "./ReviewCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Reviews() {

    const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

    return (
        <div className="flex flex-col justify-center bg-(--block-color)/20 rounded-2xl shadow-[3px_3px_6px_rgba(0,0,0,0.32)] mt-12 mb-8 max-h-60 md:w-4/5 lg:w-full mx-auto">

          
          <Slider {...settings}>
            {reviewsData.map(review => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Slider>
        </div>
    )
}

export default Reviews;