import "./Navbar.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [navClassName, setNavClassName] = useState("res--navbar");
  const [isOpen, setIsOpen] = useState(false);

  function toggleNavbar() {
    if (navClassName === "res--navbar") {
      setNavClassName("res--navbar res--navbar-visible");
      document.body.classList.add("no-scroll");
      setIsOpen(!isOpen);
    } else {
      setNavClassName("res--navbar");
      document.body.classList.remove("no-scroll");
      setIsOpen(!isOpen);
    }
  }

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 975);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 975);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "MyWebNow",
          text: "MyWebNow - Check it out!",
          url: "https://clickform.vercel.app",
        })
        .then(() => {
          console.log("Shared successfully!");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <NavLink className="nav-link" to={"/"}>
            <div className="logoItem">
              <img src="/logo.svg" alt="Logo" />
              <p>MyWebNow</p>
            </div>
          </NavLink>
          <div className="linksItem">
            <p>Research</p>
            <p>Research</p>
            <p>Research</p>
            <p>Research</p>
          </div>
          <div className="shareItem">
            <img src="/share.svg" alt="Share" onClick={handleShare} />
            {isMobile ? (
              // <img src="/menu.svg" alt="Share" onClick={toggleNavbar} />
              <div className="clickRadius" onClick={toggleNavbar}>
                <div className={`menu-icon ${isOpen ? "open" : ""}`}>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={navClassName}>
        <hr className="navLine" />
        <p className="res--nav-item">Research</p>
        <p className="res--nav-item">Research</p>
        <p className="res--nav-item">Research</p>
        <p className="res--nav-item">Research</p>
      </div>
    </>
  );
}

export default Navbar;
