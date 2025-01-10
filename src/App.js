import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componints/header/Header.jsx";
import Main from "./componints/main-page/Main.jsx";
import Mean2 from "./componints/mean-page-2/mean2.jsx";
import Section2 from "./componints/main-page/Slider/Slider.jsx";
import Features from "./componints/Features/features.jsx";
import Contact from "./componints/contact-us/contact.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "./componints/footer/footer.jsx";
import TshirtSlider from "./componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />

        <div className="main-slider">
          <Section2 />
          <Main />
        </div>
        <Features />
        <Mean2 />
        <Contact />
      </div>
      <div className="Teshirt-slider"></div>

      <Footer />
      <Routes>
        <Route path="./componints/header/Header.jsx" element={<Header />} />
        <Route
          path="./componints/T-shirt/Tshirt-slider/Tshirt-slider.jsx"
          element={<TshirtSlider />}
        />
      </Routes>
    </Router>
  );
}

export default App;
