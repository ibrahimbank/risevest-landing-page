import Firm from "../images/supportIcon.png";

function SupportFirm() {
  return (
    <section className="firm">
      <div className="supportHeader">
        <p>We are supported by</p>
        <img src={Firm} alt="comapanies icon" />
      </div>
    </section>
  );
}

export default SupportFirm;
