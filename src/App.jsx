import "./App.css";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import SectionOne from "./components/SectionOne";
import GridSection from "./components/GridSection";
import TabsSlider from "./components/TabsSlider";
import EmblaCarousel from "./components/EmblaCarousel";
import "./components/embla.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <StartSection />
        <EmblaCarousel slides={[1, 2, 3, 4, 5]} />
        <TabsSlider />
        <SectionOne />
        <GridSection />
      </div>
    </>
  );
}

export default App;
