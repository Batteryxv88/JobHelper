import styles from "./footer.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import errors from "../../store/errors";

const Footer = () => {
    const navigate = useNavigate();

    const stateClearHandler = () => {
        errors.errorState = null
      }

      const backHandler = () => {
        navigate(-1);
        errors.errorState = null;
      }

    return ( <div className={styles.footer}>
        <Link to="/" className={styles.button + ' ' + styles.home} onClick={stateClearHandler}></Link>
        <button onClick={backHandler} className={styles.button + ' ' + styles.back}></button>
    </div> );
}
 
export default Footer;