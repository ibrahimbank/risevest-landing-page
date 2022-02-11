import Stock from "./images/stockIcon.png";
import RealEstate from "./images/realEstateIcon.png";
import FixedIncome from "./images/fixedIncomeIcon.png";

const AssetData = [
  {
    id: 1,
    image: require("./images/stockIcon.png"),
    heading: "Stocks",
    return: " 14% per annum Risk",
    risk: "Medium",
    description:
      "We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks.",
    button: "Learn how Stocks work",
  },
  {
    id: 2,
    image: require("./images/realEstateIcon.png"),
    heading: "Real Estate",
    return: " 14% per annum Risk",
    risk: "Medium",
    description:
      "Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US.",
    button: "Learn how Real Estate work",
  },
  {
    id: 3,
    image: require("./images/fixedIncomeIcon.png"),
    heading: "Fixed Income",
    return: "14% per annum Risk",
    risk: "Medium",
    description:
      "A low-risk asset perfect for anyone who wants to protect their money in a secure, appreciating currency, i.e. the dollar. For people who want to protect their hard-earned money from inflation while earning steady returns.",
    button: "Learn how Fixed Income work",
  },
];

export default AssetData;
