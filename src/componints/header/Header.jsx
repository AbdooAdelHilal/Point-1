import React from "react";
import logo from "../../background/logo.png";
import "./header.css";
export default function Header() {
  return (
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
            <a className="arabc-text" href="#">
              عن الشركة
            </a>
          </li>

          <li>
            <a className="arabc-text" href="#">
              الاصناف
            </a>
            <div class="dropdown">
              <span></span>
              <div class="triangle-down"></div>
            </div>
          </li>
          <li>
            <a className="main" href="#">
              الرئيسية
            </a>
          </li>
        </ul>
      </nav>
      {/* <div className="spacebt"></div> */}
    </header>
  );
}
