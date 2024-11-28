import "./GridSection.css";

function GridSection() {
  return (
    <div className="gridSection">
      <p className="heading">Get started with ChatGPT today</p>
      <p className="headText">View pricing plans</p>
      <div className="pricingGrid">
        <div className="pricingGridContainer">
          <div className="gridItem item1">
            <p className="topText">Free</p>
            <p className="priceText">€0 / month</p>
            <p className="provisionText">
              For individuals just getting started with ChatGPT
            </p>
            <button className="purchaseButton">Start now</button>
            <div className="provisions">
              <div className="provisions">
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
                <div className="provision">
                  <img src="/check.svg" alt="" />
                  <p className="provisionText">
                    Health, dental, and vision insurance
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="gridItem item2">
            <p className="topText">Free</p>
            <p className="priceText">€0 / month</p>
            <p className="provisionText">
              For individuals just getting started with ChatGPT
            </p>
            <button className="purchaseButton">Start now</button>
            <div className="provisions">
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
              <div className="provision">
                <img src="/check.svg" alt="" />
                <p className="provisionText">
                  Health, dental, and vision insurance
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tryBox">
        <p className="boxText">
          Instant answers. Greater productivity. Endless inspiration
        </p>
        <button className="tryButton">
          Try ChatGPT
          <img src="/whitearrowright.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default GridSection;
