import { useSelector } from 'react-redux';

const Home = () => {
  const customer = useSelector((state) => state.customer.value);

  console.log(customer);
  return (
    <div>
      Hello World.
    </div>
  );
};

export default Home;
