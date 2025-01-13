import "./contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import raia from "../../background/raiaL.png";
import toshipa from "../../background/toshipaL.png";
import tepco from "../../background/tepcoL.png";
import Petromin from "../../background/petroL.png";

import React from "react";

export default function Contact() {
  return (
    <>
      <section className="contact-info">
        <div className="contact-title">
          <h1>تواصل معنا </h1>
        </div>
        <div className="boxes">
        
        <div className="left-box">
        <h1 className="title-3">
            أو بأمكانك التواصل معنا من خــــــــــــــــــــلال{" "}
          </h1>
            <div className="numbers-email"> 
              <div className="numbers">
                <div>
                  <h3 className="numbers-h">أرقام الهاتف</h3>
                  <i
                    className="fas fa-phone"
                    style={{ color: "#fff", fontSize: "12px" }}
                  ></i>
                </div>
                <h3>01098939317 - 01223338932 - 01113658575</h3>
              </div>
              <div>
                <div className="email-box">
                  <h3>البريد الالكتروني</h3>
                  <i
                    class="fas fa-envelope"
                    style={{ color: "wight", fontSize: "12px" }}
                  ></i>
                </div>
              </div>
              <div>
                <h3 className="email">sales.point@pointuniform.com</h3>
              </div>
            </div>
          </div>
          
          <div className="right-box">
            <div className="inf-box">
              <div class="form-container">
                <div>
                  <label for="name">الاسم</label>
                  <input type="text" className="name" name="name" required />

                  <label for="email">الإيميل</label>
                  <br></br>
                  <input type="email" className="name" name="email" required />
                  <br></br>
                  <label for="phone">رقم الهاتف</label>
                  <br></br>
                  <input type="tel" className="name" name="phone" required />
                  <br></br>
                  <div className="propusion-box">
                    <textarea
                      className="message"
                      name="message"
                      rows="5"
                      required
                      placeholder="اترك لنا استفسارك وسنقوم بالتواصل معك"
                    ></textarea>
                    <button type="submit">أرسال رسالة</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <div class="logos-container">
          <img src={raia} />
          <img src={toshipa} />
          <img src={tepco} />
          <img src={Petromin} />
        </div>
      </section>
    </>
  );
}
