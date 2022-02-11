import AssetData from "../assetState";
import { FaArrowRight } from "react-icons/fa";

function Asset() {
  return (
    <section className="asset">
      <h2 className="asset_classes">Asset Classes</h2>
      <p className="asset_detail">
        It’s your money, choose where you invest it
      </p>
      <div className="card">
        {AssetData.map((data) => {
          return (
            <div key={data.id} className="asset__description">
              <div
                className={
                  data.id === 1
                    ? "empty"
                    : data.id === 2
                    ? "emptyOne"
                    : data.id === 3
                    ? "emptyTwo"
                    : "empty"
                }
              ></div>
              <div className="asset__img">
                <img src={data.image} alt="" />
              </div>
              <div className="asset__heading">
                <h2>{data.heading}</h2>
                <p>{data.description}</p>
                <h4>
                  Historical returns: <span>{data.return} </span>
                </h4>
                <h4 className="risk">
                  Risk Level: <span>{data.risk} </span>
                </h4>
              </div>

              <div className="button">
                <button className="btn btn__btn">
                  {data.button} <FaArrowRight className="arrow" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Asset;
