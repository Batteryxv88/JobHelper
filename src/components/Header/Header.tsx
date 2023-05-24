import styles from './header.module.css';
import { Link } from 'react-router-dom';
import errors from '../../store/errors';

const Header = () => {
const stateClearHandler = () => {
  errors.errorState = null
}

  return <div className={styles.header}>
    <Link to="/" className={styles.home} onClick={stateClearHandler} ></Link>
  </div>;
};

export default Header;
<></>;
