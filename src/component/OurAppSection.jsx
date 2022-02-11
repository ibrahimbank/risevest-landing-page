import Phone from "../images/phoneScreen.png";
import { useState, useEffect } from "react";

function OurAppSection() {
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
    <section className="ourApp">
      {dimensions.width >= 900 && (
        <>
          <div className="ourApp__img">
            <img src={Phone} alt="phone" className="ourAppImage" />
          </div>
          <div className="ourApp__details">
            <h6>The Rise App</h6>
            <h2>
              Save for your <span>Future</span>
            </h2>
            <p>
              With Rise, you achieve your financial goals faster. Save for
              school, your home, vacations, your children’s future and more.
            </p>
            <button className="ourApp__btn">Start saving</button>
          </div>
        </>
      )}
    </section>
  );
}

export default OurAppSection;
