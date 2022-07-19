import Banner from '../../../components/CustomerBanner';
import StoreTabs from '../../../components/StoreTabs';
import PopularRedeem from '../../../components/PopularRedeem';

const Home = () => (
  <div className="container py-3">
    <section>
      <Banner />
    </section>

    <section className="mt-5">
      <StoreTabs />
    </section>

    <section className="my-5">
      <PopularRedeem />
    </section>
  </div>
);

export default Home;
