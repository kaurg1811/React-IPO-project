import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/ipo">IPO</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/brokers">Brokers</NavLink></li>
    </ul>
  );
}

export default NavBar;
