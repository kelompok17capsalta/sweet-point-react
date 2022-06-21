import Banner from "../../../components/CostumerBanner";
import Section1 from "../../../components/HomeSection/Section1";
import Section2 from "../../../components/HomeSection/Section2";
import Section3 from "../../../components/HomeSection/Section3";

const Home = () => (
  <div className="container py-3">
    <div>
      <Banner />
    </div>
    <Section1 />
    <Section3 />
    <Section2 />
  </div>
);

export default Home;
