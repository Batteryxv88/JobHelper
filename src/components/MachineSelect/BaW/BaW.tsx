import { observer } from 'mobx-react-lite';
import styles from '../machineSelect.module.css';
import { Link } from 'react-router-dom';
import { BW1100 } from '../../../store/BW1100';
import { BW1250 } from '../../../store/BW1250';
import { BW6136 } from '../../../store/BW6136';
import errors from '../../../store/errors';

const BaW = observer(() => {
  return (
    <>
      <Link
        to="1100"
        onClick={() => errors.selectMachine(BW1100)}
        className={styles.button}
      >
        1100
      </Link>
      <Link
        to="1250"
        onClick={() => errors.selectMachine(BW1250)}
        className={styles.button}
      >
        1250
      </Link>
      <Link
        to="6136"
        onClick={() => errors.selectMachine(BW6136)}
        className={styles.button}
      >
        6136
      </Link>
    </>
  );
});

export default BaW;
