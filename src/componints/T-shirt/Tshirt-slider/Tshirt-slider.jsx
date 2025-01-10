import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blue from "../../../background/blue.png";
import orang from "../../../background/orang.png";
import red from "../../../background/red.png";

import { Navigation, Pagination } from "swiper/modules";

import "./Tshirt-slider.css";

const TshirtSlider = () => {
  return (
    <div className="product-page">
      {/* Header Section */}
      <header className="product-header">
        <h1>معلومات عن تي شيرت كم أو نص</h1>
        <p>التصنيفات &gt; تي شيرت</p>
      </header>
      <div className="product-info">
        <h2>تي شيرت كم أو نص</h2>
        <p className="product-rating">⭐⭐⭐⭐⭐</p>
        <p className="product-description">
          تي شيرت نص كم أو كم تاني، اللون مصنوع من القطن المصري بنسبة 100%. كما
          أنه مناسب لتنفيذ جميع تصميمات السويت شيرت بجميع الألوان وجميع
          المقاسات.
        </p>
        <div className="product-colors">
          <p>الألوان:</p>
          <span
            className="color-circle"
            style={{ backgroundColor: "red", cursor: "pointer" }}
          ></span>
          <span
            className="color-circle"
            style={{ backgroundColor: "blue", cursor: "pointer" }}
          ></span>
          <span
            className="color-circle"
            style={{ backgroundColor: "yellow", cursor: "pointer" }}
          ></span>
        </div>
        <div className="product-buttons">
          <button className="buy-now">شراء الآن</button>
          <button className="custom-order">
            {" "}
            (كمية لا تقل عن 100 قطعة) طلب بمواصفات خاصة
          </button>
        </div>
      </div>
      {/* Product Section */}
      <div className="product-section">
        {/* Slider Section */}
        <div className="product-slider">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
          >
            <SwiperSlide>
              <img src={blue} alt="تي شيرت 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={red} alt="تي شيرت 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={orang} alt="تي شيرت 3" />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Product Info Section */}
      </div>

      {/* Footer Section */}
      <footer className="product-footer">
        <h1>تفاصيل المنتج</h1>
        <div class="text-container">
          <p>
            ويم السوم. ووار ليست. ألما فيسبستينتور أداما سباحق الأرأي بيسنت دو
            أوسمود تمسولكتبتوينيست بورير إن ورار ماتا أليكيوا. بعت لام ن سمسم
            ماميس كوامس
          </p>
          <p>
            مرير لفير سنسيت ألياكو أيديم بيس سنع أليقي أس ألي كومودو كونسقيت.
            وجاليس إيبس أمون دويلر إن برسبسيبايت. ماميس لسات ليس والنيم بيو ألب
            تمب أيس تينسيل كروسات كيليكتات جولي آث لورسونت بيو وب. بيسنت، ويلب
            ألب كيليلت إليس كوم إن ليو
          </p>
          <p>
            رويس. بيسبستينتور أدام. نو أسميس ليس تينس بيو ألبيس أيميت. أوروس
            بيرليس ميتانيم تمبريكوينت إنستسبيرام. وقم نيم ألبرافيو ألب كيوا إن
            ألب ساﻮﻴﻛ,ﻢﻳﺎﻨﻴﻓ ﻢﻴﻨﻴﻣ دأ ﻢﻴﻧا تﻮﻳ . اﻮﻴﻜﻴﻟأ ﺎﻨﺟﺎﻣ رﻻود تا يرﻮﺑﻻ
            تﻮﻴﺘﻧﻮﻳﺪﻳﺪﻳﺎﻜﻧأ رﻮﺒﻤﻴﺗ دﻮﻤﺳﻮﻳأ ود ﺖﻴﺳ,ﺖﻳﺎﻴﻟأ ﺞﻨﻴﻜﺴﻳ ﺎﺒﻳادأ
            رﻮﺘﻴﺘﻜﻴﺴﻧﻮﻛ, ﺖﻴﻣأ ﺖﻴﺳ رﻻود مﻮﺴﺒﻳا ﻢﻳرو
          </p>
          <p>
            أيمتيت فيألسمت ألب ,ﺖﻳﺎﺟﻮﻴﻓ تﻮﻳأ ﺖﻳادوأ تﻮﻳأ ﺮﺸﺗﺎﻧﺮﻴﺒﺳأ ﺖﻳﺎﺳ
            سﺎﺘﺑﻮﻴﻟﻮﻓ ياﻮﻴﻛ ﻢﻴﺗﺎﺗﺎﺑﻮﻴﻟﻮﻓ مﺎﺴﺑأ ﻢﻴﻧأ ﻮﻤﻴﻧ .ﻮﺑﺎﻜﻴﻠﺒﺴﻛأ ﺖﻧﻮﻴﺳ
            ﺎﺗﺎﻜﻳد يﺎﺘﻴﻓ يﺎﺘﻴﺑ ﻮﺘﻜﻴﺘﻴﺷرأ ﻲﺳﺎﻴﻛ مﻮﻴﻜﺴﻳاﻮﻴﻛ وررﻮﺑ ﻮﻴﻜﻴﻧ .ﺖﻧﻮﻳﺎﻜﺴﻴﻧ
            ياﻮﻴﻜﻴﺳ ﻢﻴﺗﺎﺘﺑﻮﻴﻟﻮﻓ ﻦﺷﺎﺗار ياﻮﻴﻛ سﻮﻳأ سرﻻود يﺎﻨﺟﺎﻣ ﺮﺸﺘﻧﻮﻴﻜﻴﺴﻧﻮﻛ
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TshirtSlider;
