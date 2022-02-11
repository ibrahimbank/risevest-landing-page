import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import ImgOne from "../images/illuMobile1.png";
import ImgTwo from "../images/illuMobile2.png";
import ImgThree from "../images/illuMobile3.png";
import illustrationOne from "../images/illustrationOne.svg";
import illustrationTwo from "../images/illustrationTwo.svg";
import illustrationThree from "../images/illustrationThree.svg";
import illustrationFour from "../images/illustrationFour.svg";

function Offers() {
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
    <>
      <section className="offer performance">
        <img
          src={dimensions.width <= 780 ? ImgOne : illustrationOne}
          alt="illustration"
          className="offers__img"
        />
        {dimensions.width <= 780 ? (
          <div className="offers__details">
            <h2>Superior Performance</h2>
            <p>
              Rise outperforms your other alternatives in two ways. The first is
              through our expert, algorithm driven investment approach that
              picks through over 3,000 data sets to find the perfect investment
              for you.
            </p>
          </div>
        ) : (
          <div className="offers__details">
            <h2>Invest your money in dollars</h2>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better.
            </p>
            <button className="btn">
              Start Investing Now <FaArrowRight className="arrow" />
            </button>
          </div>
        )}
      </section>

      {/* /////////////////////////////// */}

      <section className="offer">
        <img
          src={dimensions.width <= 900 ? ImgTwo : illustrationTwo}
          alt="illustration"
          className="offers__img"
        />
        {dimensions.width <= 900 ? (
          <div className="offers__details personalization">
            <h2>Personalization</h2>
            <p>
              No two people are the same, and everyone’s financial goals are
              different. Rise understands this, which is why we tailor your
              journey to financial freedom to fit you.
            </p>
          </div>
        ) : (
          <div className="offers__details personalization">
            <h2>Choose what's best for you</h2>
            <p>
              Unlike other platforms, Rise lets you pick between stocks, US real
              estate and fixed income, according to your risk appetite. That way
              you can spread your risk and tap into different investments all in
              one place.
            </p>
            <button className="btn">
              Start Investing Now <FaArrowRight />
            </button>
          </div>
        )}
      </section>

      {/* //////////////////////////// */}

      <section className="offer diversification">
        <img
          src={dimensions.width <= 780 ? ImgThree : illustrationThree}
          alt="illustration"
          className="offers__img"
        />
        {dimensions.width <= 780 ? (
          <div className="offers__details">
            <h2>Diversification</h2>
            <p>
              Rise offers a choice of three asset classes: US equities, US real
              estate and fixed income assets to provide stability to your
              investments and protection from market declines. You can pick one
              asset class or
            </p>
          </div>
        ) : (
          <div className="offers__details">
            <h2>Set goals and reach them</h2>
            <p>
              You can invest towards a goal on Rise--retirement, higher
              education, save for your home or travel budgets. Or create a goal
              of your own and invest periodically to achieve them.
            </p>
            <button className="btn">
              Start Investing Now <FaArrowRight />
            </button>
          </div>
        )}
      </section>

      {/* //////////////////////////// */}

      {dimensions.width >= 781 && (
        <section className="offer auto_invset">
          <img
            src={illustrationFour}
            alt="illustration"
            className="offers__img"
          />

          <div className="offers__details auto_invset_details ">
            <h2>We remember so you dont have to</h2>
            <p>
              Our Auto-invset feature makes it easy to stay consistent, even
              when you forget. Set a funding amount, frequency and payment
              method and Rise will automatically fund your investment, on
              schedule.
            </p>
            <button className="btn">
              Start Investing Now <FaArrowRight />
            </button>
          </div>
        </section>
      )}
    </>
  );
}

export default Offers;
