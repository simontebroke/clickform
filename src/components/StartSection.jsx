import "./StartSection.css";

function StartSection() {
  return (
    <div className="startSection">
      <div className="startSectionContainer">
        <div className="headingItem">
          <h1 className="mainHeading">Ask ChatGPT anything</h1>
        </div>
        <div className="searchItem">
          <p className="searchText">Review my argument for a debate</p>
          <img src="/searcharrow.svg" alt="Search" />
        </div>
        <div className="iconItem">
          <div className="icon">
            <img src="/whatsapp.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/instagram.svg" alt="" />
          </div>
          <div className="icon">
            <img src="/tiktok.svg" alt="" />
          </div>
          <div className="icon">
            <img src="email.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartSection;
