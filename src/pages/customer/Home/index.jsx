import { useSelector } from 'react-redux';
import styles from './style.module.css';

const Home = () => {
  const customer = useSelector((state) => state.customer.value);

  console.log(customer);
  return (
    <div className={`container ${styles.container_custom}`}>
      Hello World.
    </div>
  );
};

export default Home;
