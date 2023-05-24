import styles from './home.module.css'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to={'/select'} className={styles.button}>
        Select Machine
      </Link>
      <button className={styles.button}>
        FaQ
      </button>
    </>
  );
};

export default Home;
