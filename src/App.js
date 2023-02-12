import { Route, Routes } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import PlanMyKitchen from "./pages/PlanMyKitchen";
import Shop from "./pages/Shop";
import ScrollToTop from "./utils/scrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/plan-my-kitchen" element={<PlanMyKitchen />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
        {/* <Footer /> */}
      </ScrollToTop>
    </div>
  );
}

export default App;
