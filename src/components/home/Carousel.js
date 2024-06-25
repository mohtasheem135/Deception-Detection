import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";

// import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const images = [
    "/img/imgv6.jpg",
    "/img/imgv7.jpg",
    "/img/imgv8.jpg",
    "/img/imgv9.jpg",
    "/img/imgv1.jpg",
    "/img/imgv2.jpg",
    "/img/imgv3.jpg",
    // "/img/imgv4.jpg",
    // "/img/imgv5.jpg",
  ];

  const settings = {
    dots: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    swipeToSlide: true,
    rtl: true,
    cssEase: "linear",
    autoplay: true,
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    focusOnSelect: true,
  };

  return (
    <div className=" mt-[40px]  flex justify-center items-center">
      <div className="w-[700px] ">
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className="flex justify-center items-center  w-[700px]  p-[40px]">
            <img className=" shadow-black  rounded-[32px]" src={img} alt={img} />
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default Carousel;
