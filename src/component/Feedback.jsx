import { useState, useEffect } from "react";
import FeedbackData from "../feedbackData";
import feedbackImageOne from "../images/feedbackImageOne.png";

function Feedback() {
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
    <section className="feedback">
      {dimensions.width <= 900 ? (
        <>
          <h2>What our customers are saying</h2>
          <p className="feedback__para">We serve over 80,000 amazing users.</p>
        </>
      ) : (
        <>
          <h2>From The People Who Use Rise</h2>
          <p>
            Our mission at Risevest is to empower more people just like you to
            achieve your personal financial goals.
          </p>
        </>
      )}

      <div className="feedbackCard__container">
        {dimensions.width <= 900 ? (
          <>
            <div className="feedbackCard">
              <p>
                I don’t want to invest in separate stocks because I’m not a
                financial expert and I would rather trust my money in the hands
                of people like Rise who are skilled and knowledgeable.
              </p>
              <div className="profile">
                <img src={feedbackImageOne} alt="profile" />
                <h5>Lade</h5>
                <p>UX Researcher</p>
              </div>
            </div>
          </>
        ) : (
          FeedbackData.map((data) => {
            return (
              <>
                <div className="feedbackCard" key={data.id}>
                  <p>{data.description}</p>
                  <div className="profile">
                    <img src={data.image} alt="profile" />
                    <h5>{data.name}</h5>
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </section>
  );
}

export default Feedback;
