import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-header">
      <Logo />

      <div className="search-box">
        <input type="text" placeholder="Search IPO..." />
      </div>

      <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={menuOpen ? "nav-wrapper open" : "nav-wrapper"}>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
