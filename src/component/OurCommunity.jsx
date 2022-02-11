import communityImage from "../images/communityImage.svg";
import { useState, useEffect } from "react";

function OurCommunity() {
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
    <section className="community">
      {dimensions.width <= 900 ? (
        <>
          <div className="community__details">
            <h2>Join The Rise Community</h2>
            <p>If you want to go far, go together.</p>
            <button className="community_btn">Join our Community</button>
          </div>

          <img src={communityImage} alt="community" />
        </>
      ) : (
        <>
          <div className="community__details">
            <h2>Join The Rise Community</h2>
            <p>
              If you want to go far, go together. Our Telegram community
              surrounds you with others who can help you along your financial
              journey with tips, support, advice and learning. It's completely
              free and open to new and seasoned investors.
            </p>
            <button className="community_btn">Join our Community</button>
          </div>

          <img
            src={communityImage}
            alt="community"
            className="community__img"
          />
        </>
      )}
    </section>
  );
}

export default OurCommunity;
