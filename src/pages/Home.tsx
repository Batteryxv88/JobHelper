import styles from './home.module.css'
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Link to={'/select'} className={styles.button}>
        Select Machine
      </Link>
      <Link to={'/'} className={styles.button}>
        FaQ
      </Link>
    </>
  );
};

export default Home;
