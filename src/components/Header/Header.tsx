import styles from './header.module.css';
import { Link } from 'react-router-dom';
import errors from '../../store/errors';

const Header = () => {
const stateClearHandler = () => {
  errors.errorState = null
}

  return <header className={styles.header}>
    {/* <Link to="/" className={styles.home} onClick={stateClearHandler} ></Link> */}
    <div className={styles.logo}></div>
    <h2 className={styles.h2}>TECH SUPPORT TEAM</h2>
  </header>;
};

export default Header;
<></>;
