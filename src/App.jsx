import "./App.css";
import Navbar from "./components/Navbar";
import StartSection from "./components/StartSection";
import SectionOne from "./components/SectionOne";
import GridSection from "./components/GridSection";
import TabsSlider from "./components/TabsSlider";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <StartSection />
        <TabsSlider />
        <SectionOne />
        <GridSection />
      </div>
    </>
  );
}

export default App;
