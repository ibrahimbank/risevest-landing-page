import Navbar from "./Navbar";
import AppleIcon from "../images/appleIcon.svg";
import GoogleIcon from "../images/googleIcon.svg";
import Phone from "../images/andriodPhone.png";

function Header() {
  return (
    <>
      <Navbar />
      <header>
        <div className="header_description">
          <h1 className="heading">Dollar investments that help you grow</h1>
          <p className="para">
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.
          </p>
          <div className="playstore">
            <a href="">
              <img src={AppleIcon} alt="apple" />
            </a>

            <a href="">
              <img src={GoogleIcon} alt="google" className="google" />
            </a>
          </div>
        </div>
        <div className="header_image">
          <img src={Phone} alt="mobile phone" />
        </div>
      </header>
    </>
  );
}

export default Header;
