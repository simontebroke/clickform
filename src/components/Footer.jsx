import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-grid">
          <div className="column column1">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item ">Our Research</p>
          </div>
          <div className="column column2">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
            <p className="footer-item ">Our Research</p>

            <p className="footer-item ">Our Research</p>
          </div>
          <div className="column column3">
            <p className="footer-item footer-headline">Our Research</p>
            <p className="footer-item">Our Research</p>
          </div>
        </div>
        <div className="lower-footer">
          <button className="langButton">
            <img src="/lang.svg" alt="" />
            <p className="buttonText">Deutsch</p>
          </button>
          <div className="bottom-footer-sec">
            <p>
              mywebnow©2015-2024 <span>Manage Cookies</span>
            </p>
            <div className="icons">
              <img src="/whatsapp.svg" alt="" />
              <img src="/instagram.svg" alt="" />
              <img src="/tiktok.svg" alt="" />
              <img src="/email.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
