import appleIcon from "../images/appleIcon.svg";
import googleIcon from "../images/googleIcon.svg";
import andriodPhone from "../images/andriodPhone.png";

function LinkToAppSection() {
  return (
    <div className="join_us_container">
      <section className="join__us">
        <div className="join__us__details">
          <h6>Download The Rise App </h6>
          <h2>Join our 100,000 users investing and setting long term goals</h2>
          <p>Dollar investment that help you grow</p>

          <div className="join_btn">
            <img src={appleIcon} alt="apple" />
            <img src={googleIcon} alt="apple" className="google" />
          </div>
        </div>
        <div className="join__us__img">
          <img src={andriodPhone} alt="phone" className="phone__image" />
        </div>
      </section>
    </div>
  );
}

export default LinkToAppSection;
