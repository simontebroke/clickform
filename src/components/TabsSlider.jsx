import React, { useState } from "react";
import { motion } from "motion/react";
import "./TabsSlider.css";

const tabs = [
  {
    id: "world",
    label: "Analyze data",
    img: "/mainframe1.jpg",
    categories: ["Standort", "E-Mail", "Lieferando", "Social-Media Links"],
    description: "Beschreibung",
    sumDesc:
      "Starbucks' Design konzentriert sich auf warme Farben, natürliche Texturen und eine einladende Atmosphäre, die das Markengefühl widerspiegelt. Illustrative Details und klare Navigation schaffen ein Erlebnis, das Handwerkskunst und Moderne verbindet.",
    dynamicText:
      "Folgende Elemente deiner Seite wie Bilder, Texte, Fonts, Farben, Logos und Buttons sind variabel und frei personalisierbar.",
  },
  {
    id: "ny",
    label: "Download the app",
    img: "/5.jpg",
    categories: ["App-Store", "Play-Store"],
    description: "Beschreibung",
    sumDesc:
      "JKFJAKFJKA KASDL LASDK Design konzentriert sich auf warme Farben, natürliche Texturen und eine einladende Atmosphäre, die das Madqwdqwrkengefühl widerspiegelt.",
    dynamicText:
      "Folgende Elemente deiner Seite wie Bilder, Texte, Fonts, Farben, Logos und Buttons sind variabel und frei personalisierbar.dqwdwqdqwdqwdwq",
  },
  {
    id: "business",
    label: "Business tools",
    img: "/3.jpg",
    categories: ["CRM", "Marketing", "Analytics"],
    description: "Beschreibung",
    sumDesc:
      "Starbucks' Design konzentriert sich auf warme Farben, natürliche Texturen und eine einladende Atmosphäre, die das Markengefühl widerspiegelt.",
    dynamicText:
      "Geschäftstools wie CRM-Formulare, Marketing-Kampagnen und Analysen sind konfigurierbar. diqwdioq j idqwj iqwjd iqwjdiq",
  },
  {
    id: "arts",
    label: "Creative suite",
    img: "/4.jpg",
    categories: ["Illustration", "Design", "3D Modeling"],
    description: "Beschreibung",
    sumDesc:
      "Starbucks' Design konzentriert sich auf warme Farben, natürliche Texturen und eine einladende Atmosphäre, die das Markengefühl widerspiegelt.",
    dynamicText:
      "Gestalterische Elemente wie Illustrationen, Layouts und 3D-Modelle können angepasst werden.",
  },
];

function TabsSlider() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="container">
      <p className="heading">Supercharge your team's performance</p>
      <div className="tabs-slider-container">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${
              activeTab === tab.id ? "active" : "hover"
            }`}
            style={{
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="bubble"
                className="tab-bubble"
                style={{ borderRadius: 9999 }}
                transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>
      <div className="images-container">
        <div className="image-container">
          <div className="image">
            {activeTabData && (
              <img src={activeTabData.img} alt={activeTabData.label} />
            )}
          </div>
        </div>
      </div>
      <div className="additionalDesc">
        <div className="desc">
          <img src="arrow.svg" alt="^" />
          <p className="descText">{activeTabData.dynamicText}</p>
        </div>
        <div className="descBox">
          <div className="descBoxInnerContainer">
            <div className="categoriesContainer">
              {activeTabData.categories.map((category, index) => (
                <div key={index} className="category">
                  {category}
                </div>
              ))}
            </div>
            <p className="descTitle">{activeTabData.description}</p>
            <p className="sumDesc">{activeTabData.sumDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabsSlider;
