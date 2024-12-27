// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import slider from "../../../background/slider.jpg";
// // import "swiper/css"; // استيراد الأنماط الأساسية لـ Swiper
// import "swiper/css/navigation"; // إذا كنت تستخدم التنقل
// // import "swiper/css/pagination"; // إذا كنت تستخدم النقاط التوضيحية

// const Slider = () => {
//   return (
//     <Swiper spaceBetween={50} slidesPerView={1}>
//       <SwiperSlide>
//         <img src={slider} alt="slider" width={200} />
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={slider} alt="Slider" width={200}/>
//       </SwiperSlide>
//       <SwiperSlide>
//         <img src={slider} alt="Slider" width={200} />
//       </SwiperSlide>
//     </Swiper>
//   );
// };

// export default Slider;
// import "./Slider.css";
// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation"; // استيراد الأنماط الخاصة بالتنقل
// import slider from "../../../background/slider.jpg";
// // استيراد أيقونات FontAwesome أو استخدام صور مخصصة
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Slider = () => {
//   const swiperRef = useRef(null); // مرجع لتحكم في الـ Swiper

//   return (
//     <div className="slider-container">
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={1}
//         slidesPerView={1}
//         navigation={{
//           prevEl: ".swiper-button-prev", // الزر السابق
//           nextEl: ".swiper-button-next", // الزر التالي
//         }}
//       >
//         <SwiperSlide>
//           <img
//             src={slider}
//             alt="slider"
//             style={{ width: "200px", height: "100px" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={slider}
//             alt="Slider"
//             style={{ width: "200px", height: "100px" }}
//           />
//         </SwiperSlide>
//         <SwiperSlide>
//           <img
//             src={slider}
//             alt="Slider"
//             style={{ width: "200px", height: "100px" }}
//           />
//         </SwiperSlide>
//       </Swiper>

//       {/* أزرار التنقل */}
//       <div className="swiper-button-prev">
//         <FaArrowLeft size={1} color="#fff" />
//       </div>
//       <div className="swiper-button-next">
//         <FaArrowRight size={1} color="#fff" />
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Slider.css"
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import image from "../../../background/slider.jpg";
// import image from "../../../background/slider.jpg";
// import image from "../../../background/slider.jpg"; // استبدل الصورة بالمسار الخاص بك

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

