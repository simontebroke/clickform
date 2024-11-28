import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="logoItem">
          <img src="/logo.svg" alt="Logo" />
          <p>Clickform</p>
        </div>
        <div className="linksItem">
          <p>Research</p>
          <p>Research</p>
          <p>Research</p>
          <p>Research</p>
        </div>
        <div className="shareItem">
          <img src="/share.svg" alt="Share" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
