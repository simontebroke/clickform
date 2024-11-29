import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {
  const [navClassName, setNavClassName] = useState("res--navbar");

  function toggleNavbar() {
    if (navClassName === "res--navbar") {
      setNavClassName("res--navbar res--navbar-visible");
      document.body.classList.add("no-scroll");
    } else {
      setNavClassName("res--navbar");
      document.body.classList.remove("no-scroll");
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
            <p>MyWebNow</p>
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
              <img src="/menu.svg" alt="Share" onClick={toggleNavbar} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className={navClassName}>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
        <p>dwq</p>
      </div>
    </>
  );
}

export default Navbar;
