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

  return (
    <>
      <div className="navbar">
        <div className="navbarContainer">
          <div className="logoItem">
            <img src="/logo.svg" alt="Logo" />
            <NavLink className="nav-link" to={"/"}>
              <p>MyWebNow</p>
            </NavLink>
          </div>
          <div className="linksItem">
            <p>Research</p>
            <p>Research</p>
            <p>Research</p>
            <p>Research</p>
          </div>
          <div className="shareItem">
            <img src="/share.svg" alt="Share" />
            {isMobile ? (
              // <img src="/menu.svg" alt="Share" onClick={toggleNavbar} />
              <div
                className={`menu-icon ${isOpen ? "open" : ""}`}
                onClick={toggleNavbar}
              >
                <span></span>
                <span></span>
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
