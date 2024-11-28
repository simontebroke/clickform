import "./SectionOne.css";

function SectionOne() {
  return (
    <div className="sectionOne">
      <h1 className="heading">Teams do more, faster with ChatGPT</h1>
      <div className="topGridContainer">
        <div className="gridItem i1">
          <p className="text1">12.2%</p>
          <p className="text2">more tasks completed</p>
        </div>
        <div className="gridItem i2">
          <p className="text1">12.2%</p>
          <p className="text2">more tasks completed</p>
        </div>
        <div className="gridItem i3">
          <p className="text1">12.2%</p>
          <p className="text2">more tasks completed</p>
        </div>
      </div>
      <h1 className="heading quote">
        “We use ChatGPT in almost every part of our business, from financial
        modeling and communications to recruiting and note taking, and it’s
        accelerated everything we do.”
      </h1>
      <p className="author">
        Connor O’Brien, VP of GTM Strategy & Operations, Sourcegraph
      </p>
    </div>
  );
}

export default SectionOne;
