import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} className="logo-img" alt="Logo" />
    </Link>
  );
}
