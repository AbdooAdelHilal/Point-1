import TshirtSlider from "../T-shirt/Tshirt-slider/Tshirt-slider";
import React, { useState } from "react";
// import React from "react";
import logo from "../../background/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // تعريف الدالة
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const openInNewTab = () => {
    const url = "/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx";
    window.open(url, "_blank"); // فتح الرابط في علامة تبويب جديدة
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
                    <Link
                      to="/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx"
                      onClick={openInNewTab}
                      style={{ padding: "10px 20px", fontSize: "18px" }}
                    >
                      تي شيرت
                    </Link>
                    <Link to="/pants">بنطلونات</Link>
                    <Link to="/shoes">أحذية</Link>
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
      <Routes>
        <Route path="/componints/header/Header.jsx" element={<Header />} />
        <Route
          path="./componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx"
          element={<TshirtSlider />}
        />
      </Routes>
    </div>
  );
};
export default Header;
