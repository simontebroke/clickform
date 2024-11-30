import "./App.css";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import SectionOne from "./components/SectionOne";
import GridSection from "./components/GridSection";
import TabsSlider from "./components/TabsSlider";
import EmblaCarousel from "./components/EmblaCarousel";
import "./components/embla.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page1 from "./components/Page1";

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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page1 />} />
        <Route path="/3" element={<Page1 />} />
        <Route path="/4" element={<Page1 />} />
        <Route path="/5" element={<Page1 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
