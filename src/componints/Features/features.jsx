import solution from "../../background/solution1.png";
import varysion from "../../background/varysion1.png";
import diversity from "../../background/diversity1.png";
import "./features.css";
import React from "react";

export default function Features() {
  return (
    <div className="features">
      <div className="title">
        <h1 className="title-2">لماذا بوينت ؟</h1>
      </div>
      <div className="feature">
        <div  className="feature-s">
          <img src={diversity} className="feat3" alt="Diversity" />
          <h2 className="sub-title">تنوع كبير</h2>
        </div>
        <div class="line"></div>
        <div className="feature-s">
          <img src={varysion} className="feat2" alt="Varysion" />
          <h2 className="sub-title">اعلى جودة</h2>
        </div>
        <div class="line"></div>
        <div className="feature-s">
          <img src={solution} className="feat1" alt="Solution" />
          <h2 className="sub-title">انسب الحلول</h2>
        </div>
      </div>
    </div>
  );
}
