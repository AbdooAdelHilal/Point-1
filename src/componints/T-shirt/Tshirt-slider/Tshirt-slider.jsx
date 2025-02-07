import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import blue from "../../../background/blueT.jpg";
import orang from "../../../background/orangT.png";
import red from "../../../background/redT.png";
import PopupPage from "../Tshirt-slider/PopupPage";
import { Navigation, Pagination } from "swiper/modules";
import "./Tshirt-slider.css";

const TshirtSlider = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleOverlayClick = (e) => {
    if (e.target.className === "popup-overlay") {
      closePopup();
    }
  };
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-page">
      {/* Header Section */}
      <header className="product-header">
        <h1>معلومات عن تي شيرت كم أو نص</h1>
        <p>التصنيفات &gt; تي شيرت</p>
      </header>

      <div className="product">
        {/* Product Section */}
        <div className="product-section">
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
        </div>

        <div className="product-buttons">
          <div className="product-info">
            <h2>تي شيرت كم أو نص</h2>
            <p className="product-rating">
              <span>5 5من </span> ⭐⭐⭐⭐⭐{" "}
            </p>
            <p className="product-description">
              تي شيرت نص كم أو كم تاني، اللون مصنوع من القطن المصري بنسبة 100%.
              كما أنه مناسب لتنفيذ جميع تصميمات السويت شيرت بجميع الألوان وجميع
              المقاسات.
            </p>
            <div className="product-colors">
              <div className="options">
                {/* المقاسات */}
                <div className="option-group">
                  <label>المقاسات</label>
                  <div className="sizes">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        className={`size-button ${
                          selectedSize === size ? "active" : ""
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                {/* الكمية */}
                <div className="option-group">
                  <label>الكمية</label>
                  <div className="quantity-controls">
                    <button
                      onClick={decrementQuantity}
                      className="quantity-button"
                    >
                      -
                    </button>
                    <input type="number" value={quantity} readOnly />
                    <button
                      onClick={incrementQuantity}
                      className="quantity-button"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <p>الألوان:</p>
              <div className="spans-color">
                {["red", "yellow", "blue"].map((color) => (
                  <span
                    key={color}
                    className={`color-circle ${color} ${
                      selectedColor === color ? "selected" : ""
                    }`}
                    onClick={() => handleColorClick(color)}
                  >
                    {selectedColor === color && (
                      <span className="check-mark">✔</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
            <div className="btn">
              <button className="buy-now">شراء الآن</button>
              <button
                className="custom-order"
                onClick={openPopup}
                style={{ padding: "10px 20px", fontSize: "18px" }}
              >
                (كمية لا تقل عن 100 قطعة) طلب بمواصفات خاصة
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Component */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className="popup-content">
            <PopupPage onClose={closePopup} />
          </div>
        </div>
      )}

      {/* Footer Section */}
      <footer className="product-footer">
        <h1>تفاصيل المنتج</h1>
        <div className="text-container">
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
        </div>
      </footer>
    </div>
  );
};

export default TshirtSlider;
