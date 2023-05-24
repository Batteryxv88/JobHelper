import styles from './errorCode.module.css';
import { observer } from 'mobx-react-lite';
import errors from '../../store/errors';

const ErrorCode = observer(() => {

  return (
    
    <>{(errors.errorState.length === 0) ? <p className={styles.not_found}>Error code not found</p>: errors.errorState.map((item: any) => {
      return (
        <div className={styles.error_code} key={item.code}>
          <h3 className={styles.title}>Code</h3>
          <p className={styles.des}>{item.code}</p>
          <h3 className={styles.title}>Classification</h3>
          <p className={styles.des}>{item.class}</p>
          <h3 className={styles.title}>Cause</h3>
          <p className={styles.des}>{item.cause}</p>
          <h3 className={styles.title}>Measures to take when alert occurs</h3>
          <p className={styles.des}>{item.measure}</p>
          <h3 className={styles.title}>Estimated abnormal parts</h3>
          <p className={styles.des}>{item.abnormal}</p>
          <h3 className={styles.title}>Correction</h3>
          <p className={styles.des}>{item.corr}</p>
          <h3 className={styles.title}>Note</h3>
          <p className={styles.des}>{item.note}</p>
          <h3 className={styles.title}>Solution</h3>
          <p className={styles.des}>{item.solution}</p>
          <h3 className={styles.title}>Faulty part isolation DIPSW</h3>
          <p className={styles.des}>{item.isolate}</p>
          {item.Control? <><h3 className={styles.title}>Faulty part isolation DIPSW</h3>
          <p className={styles.des}>{item.control}</p></> : ''}
        </div>
      );
    })}
      
    </>
  );
});

export default ErrorCode;
