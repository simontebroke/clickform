import "./App.css";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import SectionOne from "./components/SectionOne";
import GridSection from "./components/GridSection";
import TabsSlider from "./components/TabsSlider";
import EmblaCarousel from "./components/EmblaCarousel";
import "./components/embla.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Page1, Page2, Page3, Page4, Page5 } from "./components/Page1";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function Home() {
  return (
    <>
      <StartSection />
      <EmblaCarousel slides={[1, 2, 3, 4, 5]} />
      <TabsSlider />
      <SectionOne />
      <GridSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design1" element={<Page1 />} />
        <Route path="/design2" element={<Page2 />} />
        <Route path="/design3" element={<Page3 />} />
        <Route path="/design4" element={<Page4 />} />
        <Route path="/design5" element={<Page5 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
