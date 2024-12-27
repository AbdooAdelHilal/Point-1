import Header from "./componints/header/Header.jsx";
import Main from "./componints/main-page/Main.jsx";
// import { CustomSlider } from "./componints/main-page/CustomSlider.jsx";
import Mean2 from "./componints/mean-page-2/mean2.jsx";
import Section2 from "./componints/main-page/Slider/Slider.jsx";
import Features from "./componints/Features/features.jsx";
function App() {
  return (
    <>
      <div className="container">
        <Header />

        <div className="main-slider">
          <Section2 />
          <Main />
        </div>
        <Features />
        <Mean2 />
      </div>
    </>
  );
}

export default App;
