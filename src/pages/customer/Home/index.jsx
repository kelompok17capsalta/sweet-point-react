import { useSelector } from "react-redux";
import Banner from "../../../components/CostumerBanner";
import Section1 from "../../../components/HomeSection/Section1";
import Section2 from "../../../components/HomeSection/Section2";
import Section3 from "../../../components/HomeSection/Section3";
import styles from "./style.module.css";

const Home = () => {
  const customer = useSelector((state) => state.customer.value);

  console.log(customer);
  return (
    <div className="container py-3">
      <div>
        <Banner />
      </div>
      <Section1 />
      <Section3 />
      <Section2 />
    </div>
  );
};

export default Home;
