import React from "react";
import Slider from "react-slick";
import slide1 from "../../assets/images/slider-img1.jpg";
import slide2 from "../../assets/images/slider-img2.jpg";
import slide3 from "../../assets/images/slider-img3.jpg";

const HeroSection = () => {
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="w-full overflow-hidden pb-10">
      <Slider {...settings}>
        
        <div className="h-[420px]">
          <img
            src={slide1}
            alt="slide1"
            className="w-full h-full object-cover object-contain"
          />
        </div>

        <div className="h-[420px]">
          <img
            src={slide2}
            alt="slide2"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <div className="h-[420px]">
          <img
            src={slide3}
            alt="slide3"
            className="w-full h-full object-cover object-top"
          />
        </div>

      </Slider>
    </div>
  );
};

export default HeroSection;