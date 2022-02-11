import { useState, useEffect } from "react";
import footerLogo from "../images/footerLogo.svg";
import { FaArrowRight } from "react-icons/fa";

function Footer() {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);
  });
  return (
    <footer className="footer">
      <ul>
        <img src={footerLogo} alt="logo" />
        <a href="">
          <li>About Us</li>
        </a>
        <a href="">
          <li>Careers</li>
        </a>
        <a href="">
          <li>FAQs</li>
        </a>
        <a href="">
          <li>Contact Info</li>
        </a>
        <a href="">
          <li>Press</li>
        </a>
        <a href="">
          <li>Rise Impact</li>
        </a>
      </ul>

      {/* explore */}
      <ul>
        <h5>Explore</h5>
        <a href="">
          <li>Investment Club</li>
          <FaArrowRight className="arrowUp" />
        </a>
        <a href="">
          <li>Blog</li>
          <FaArrowRight className="arrowUp" />
        </a>

        {dimensions.width <= 780 && (
          <>
            <a href="">
              <li>Newsletter</li>
              <FaArrowRight className="arrowUp" />
            </a>
            <a href="">
              <li>Instagram</li>
              <FaArrowRight className="arrowUp" />
            </a>
            <a href="">
              <li>Twitter</li>
              <FaArrowRight className="arrowUp" />
            </a>
          </>
        )}
      </ul>

      {/* product */}
      <ul>
        <h5>Product</h5>
        <a href="">
          <li>Rise App</li>
        </a>
        <a href="">
          <li>Wallet</li>
        </a>
        <a href="">
          <li>Asset Classes</li>
        </a>
      </ul>

      {/* contact us */}
      <ul>
        <h5>Contact Us</h5>
        <a href="">
          <li>08187147405</li>
          <FaArrowRight className="arrowUp" />
        </a>
        <a href="">
          <li>hello@risecapital</li>
          <FaArrowRight className="arrowUp" />
        </a>
        <a href="">
          <li>Newsletter</li>
          <FaArrowRight className="arrowUp" />
        </a>
        <a href="">
          <li>Instagram</li>
          <FaArrowRight className="arrowUp" />
        </a>
        <a href="">
          <li>Twitter</li>
          <FaArrowRight className="arrowUp" />
        </a>
      </ul>
    </footer>
  );
}

export default Footer;
