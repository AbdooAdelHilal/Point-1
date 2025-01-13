// import React, { useState } from "react";
// import "./Yshirt.css";
// // import bgcg from "../../background/teshirtbgcg.png";

// export default function Teshirt() {
//   const [selectedColor, setSelectedColor] = useState("blue");

//   const colors = [
//     { id: "blue", label: "أزرق" },
//     { id: "gray", label: "رمادي" },
//     { id: "orange", label: "برتقالي" },
//   ];
  

//   return (
//     <div className="product-page">
//       <header className="header">
//         <div>
//           {" "}
//           {/* <img
//             className="background"
//             src={bgcg}
//             style={{ width: "100%", height: "100px" }}
//           />
//            */}
//         </div>
//         <div className="ifo">
//           <h1>معلومات عن تي شيرت كم او نص</h1>
//           <p>الخصائص في تي شيرت</p>
//         </div>
        
//       </header>
//       <main className="detials">
//       <div className="product-details">
//           <div className="image-section">
//             <img
//               src={`/${selectedColor}-shirt.png`}
//               alt="تي شيرت"
//               className="product-image"
//             />
//           </div>
//         </div>
//         <div className="info-section">
//           <h2>تي شيرت كم او نص</h2>
//           <p className="price">100 جنيه</p>
//           <p>
//             تي شيرت نص كم او كم تاني اللون مصنوع من القطن المصري بنسبة 100٪، كما
//             أنه متاح لتنفيذ جميع تصميمات السويت شيرت بجميع الألوان وجميع
//             المقاسات.
//           </p>
//           <div className="options">
//             <div className="colors">
//               <span>الألوان:</span>
//               {colors.map((color) => (
//                 <button
//                   key={color.id}
//                   onClick={() => setSelectedColor(color.id)}
//                   className={
//                     selectedColor === color.id ? "color active" : "color"
//                   }
//                 >
//                   {color.label}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button className="buy-button">شراء الآن</button>
//           <p className="special-request">
//             طلب بمواصفات خاصة (كميات لا تقل عن 10 قطعة)
//           </p>
//         </div>
        
//       </main>
//     </div>
//   );
// }
