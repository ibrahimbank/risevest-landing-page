import "./App.css";
import "./index.css";
import Header from "./component/Header";
import SupportFirm from "./component/SupportFirm";
import Offers from "./component/Offers";
import Asset from "./component/Assest";
import OurAppSection from "./component/OurAppSection";
import Feedback from "./component/Feedback";
import OurCommunity from "./component/OurCommunity";
import LinkToAppSection from "./component/LinkToAppSection";
import Footer from "./component/Footer";
import Regulated from "./component/Regulated";

function App() {
  return (
    <div>
      <Header />
      <SupportFirm />
      <Offers />
      <Asset />
      <OurAppSection />
      <Regulated />
      <Feedback />
      <OurCommunity />
      <LinkToAppSection />
      <Footer />
    </div>
  );
}

export default App;
