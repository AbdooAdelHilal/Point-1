import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import image from "../../../background/slider.jpg";

const Section2 = () => {
  return (
    <div className="about-container">
      {/* السلايدر على اليسار */}
      <div className="slider-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="slide-content">
              <div className="circle"></div>
              <img src={image} alt="Person" className="slider-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="circle"></div>
              <img src={image} alt="Person" className="slider-image" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <div className="circle"></div>
              <img src={image} alt="Person" className="slider-image" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Section2;
