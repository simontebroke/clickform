import React, { useState } from "react";
import { motion } from "motion/react";
import "./TabsSlider.css";

const tabs = [
  { id: "world", label: "Analyze data", img: "/frame1.png" },
  { id: "ny", label: "Download the app", img: "/5.jpg" },
  { id: "business", label: "Download the app", img: "/3.jpg" },
  { id: "arts", label: "Download the app", img: "/4.jpg" },
  { id: "science", label: "Download the app", img: "/2.jpg" },
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
        <div className="image">
          {activeTabData && (
            <img src={activeTabData.img} alt={activeTabData.label} />
          )}
        </div>
      </div>
    </div>
  );
}

export default TabsSlider;
