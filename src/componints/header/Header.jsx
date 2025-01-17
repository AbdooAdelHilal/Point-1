import TshirtSlider from "../T-shirt/Tshirt-slider/Tshirt-slider";
import React, { useState } from "react";
import logo from "../../background/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const openInNewTab = () => {
    window.open(
      "/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
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
                  <button
                    className={`dropbtn arabc-text ${
                      isDropdownOpen ? "open" : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    <span className="arrow-down">▼</span>
                    الأصناف
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-content">
                      <Link
                        to="/pants"
                        className="T-sh"
                        onClick={() =>
                          openInNewTab(
                            "/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx"
                          )
                        }
                        style={{ padding: "10px 20px", fontSize: "18px" }}
                      >
                        تي شيرت
                      </Link>
                      <Link to="/pants">ﺑﻮﻟﻮ ﺗﻰ ﺷﻴﺮت</Link>
                      <Link to="/shoes">ﺟﺎﻛﺖ وﺗﺮ ﺑﺮوف</Link>
                      <Link to="/pants">ﻳﻮﻧﻴﻔﻮرم أﻓﺮاد اﻷﻣﻦ</Link>
                      <Link to="/pants">ﻳﻮﻧﻴﻔﻮرم ﻓﻨﻰ و ﻣﺼﺎﻧﻊ</Link>
                      <Link to="/pants">يونيفورم مطاعم</Link>
                      <Link to="/pants">يوﻧﻴﻔﻮرم ﻟﺮﺟﻞ اﻟﺘﻮﺻﻴﻞ</Link>
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
          <Route path="/tshirt" element={<TshirtSlider />} />
        </Routes>
      </div>
    </div>
  );
};

export default Header;
