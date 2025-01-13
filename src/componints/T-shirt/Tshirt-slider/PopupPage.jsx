
import React from "react";
import "./PopupPage.css";

const Popup = ({ onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <div className="popup-header">
          طلب بمواصفات خاصة
          {/* <button className="close-button" onClick={onClose}>
            &times;
          </button> */}
        </div>
            <div className="conti">
            <div className="popup-content">
          <div className="form-row">
            <input type="text" placeholder="الاسم" />
            <input type="email" placeholder="البريد الإلكتروني" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="رقم الهاتف" />
            <input type="text" placeholder="عنوان المنتج" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="أسماء المنتجات" />
            <input type="text" placeholder="المقاسات المطلوبة" />
          </div>
          <div className="form-row">
            <label className="file-upload">
              <input type="file" accept="image/*" />
              صورة للتصميم
            </label>
          </div>
          <textarea placeholder="تفاصل او ملاحظاتك على الطلب الخاص بكم"></textarea>
        </div>
        <div className="popup-footer">
          <button>إرسال الطلب</button>
        </div>
            </div>
      </div>
    </div>
  );
};

export default Popup;
