import "./footer.css";

import React from "react";
import logo from "../../background/logo-1.png";
// import "/public/fontawesome-free-6.7.2-web/css/all.css"

export default function Footer() {
  return (
    <div className="contianer">
      <div className="">
        <img src={logo} className="img" />
      </div>
      <div className="footer-links">
        <ul className="flex">
          <li>
            <a className="arabc-text-1" href="#">
              تواصل معنا
            </a>
          </li>
          <li>
            <a className="arabc-text-1" href="#">
              عن الشركة
            </a>
          </li>

          <li>
            <a className="arabc-text-1" href="#">
              الاصناف
            </a>
          </li>
          <li>
            <a className="arabc-text-1" href="#">
              الرئيسية
            </a>
          </li>
        </ul>
      </div>
      <div className="social-icons">
        <span className="fab fa-facebook-f sco"></span>
        <span className="fab fa-twitter sco"></span>
        <span className="fab fa-instagram sco"></span>
        {/* <span className=""></span> */}
        <span className="fab fa-linkedin-in sco"></span>
      </div>
    </div>
  );
}
