import TshirtSlider from "../T-shirt/Tshirt-slider/Tshirt-slider";
import React, { useState } from "react";
// import React from "react";
import logo from "../../background/logo.png";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // تعريف الدالة
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <header className="flex head">
        <img className="logo" src={logo} />

        <nav className="nav-bar">
          <ul className="flex">
            <li>
              <a className="arabc-text" href="#">
                تواصل معنا
              </a>
            </li>
            <li>
              <a className="arabc-text" href="../mean-page-2/mean2.jsx">
                عن الشركة
              </a>
            </li>

            <li>
              <div className="dropdown">
                {/* استخدام الدالة عند الضغط */}
                <button className="dropbtn arabc-text" onClick={toggleDropdown}>
                  الأصناف
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    <a href="/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx">تي شيرت</a>
                    <a href="/pants">بنطلونات</a>
                    <a href="/shoes">أحذية</a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <a className="main" href="#">
                الرئيسية
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
