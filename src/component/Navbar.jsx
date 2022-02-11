import Logo from "../images/logo.svg";
import ArrorDown from "../images/arrorDownIcon.svg";
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <nav>
      <img src={Logo} alt="logo" />

      <ul className="nav__items">
        <a href="/" className="nav_links">
          <li className="nav_link active">Home</li>
        </a>
        <a href="/" className="nav_links">
          <li className="nav_link">Products</li>
          <img src={ArrorDown} alt="drop down" className="dropDown" />
        </a>
        <a href="/" className="nav_links">
          <li className="nav_link">Investment Club</li>
        </a>
        <a href="/" className="nav_links">
          <li className="nav_link">Blog</li>
        </a>
        <a href="/" className="nav_links">
          <li className="nav_link">About Us</li>
        </a>
        <a href="/" className="nav_links">
          <li className="nav_link">FAQs</li>
        </a>
      </ul>
      <div className="hamburger">
        <FaBars width="24px" />
      </div>
    </nav>
  );
}

export default Navbar;
