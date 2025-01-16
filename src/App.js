// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Header from "./componints/header/Header";
// import Main from "./componints/main-page/Main";
// import Mean2 from "./componints/mean-page-2/mean2";
// import Section2 from "./componints/main-page/Slider/Slider";
// import Features from "./componints/Features/features";
// import Contact from "./componints/contact-us/contact";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import Footer from "./componints/footer/footer";
// import TshirtSlider from "./componints/T-shirt/Tshirt-slider/Tshirt-slider";

// function App() {
//   return (
//     <Router>

//       <Routes>
//         <Route>

//         </Route>
//         <Route
//           path="/"
//           element={
//             <div className="container">
//               <Header />
//               <Main />
//               <Features />
//               <Contact />
//               <Footer />
//             </div>
//           }
//         />
//       </Routes>

//       <Routes>
//         <Route path="/Tshirt-slider.jsx" element={<TshirtSlider />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componints/header/Header";
import Main from "./componints/main-page/Main";
import Mean2 from "./componints/mean-page-2/mean2";
import Section2 from "./componints/main-page/Slider/Slider";
import Features from "./componints/Features/features";
import Contact from "./componints/contact-us/contact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./componints/footer/footer";
import TshirtSlider from "./componints/T-shirt/Tshirt-slider/Tshirt-slider";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <Header />
              <div className="Head">
                <Section2 />
                <Main />
              </div>

              <Mean2 />
              <Features />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route
          path="/src/componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx"
          element={<TshirtSlider />}
        />
      </Routes>
    </Router>
  );
}

export default App;
