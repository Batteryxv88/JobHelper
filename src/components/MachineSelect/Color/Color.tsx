import { observer } from 'mobx-react-lite';
import styles from '../machineSelect.module.css'
import { Link } from 'react-router-dom';
import { C6100 } from '../../../store/C6100';
import { C6000 } from '../../../store/C6000';
import { C3080 } from '../../../store/C3080';
import { C4080 } from '../../../store/C4080';
import { C7100 } from '../../../store/C7100';
import { C14000 } from '../../../store/C14000';
import errors from '../../../store/errors';

const Color = observer(() => {
  return (
    <>
      <Link
        to="C14000"
        onClick={() => errors.selectMachine(C14000)}
        className={styles.button}
      >
        C14000
      </Link>
      <Link
        to="C7100"
        onClick={() => errors.selectMachine(C7100)}
        className={styles.button}
      >
        C7100
      </Link>
      <Link
        to="C6100"
        onClick={() => errors.selectMachine(C6100)}
        className={styles.button}
      >
        C6100
      </Link>
      <Link
        to="C4080"
        onClick={() => errors.selectMachine(C4080)}
        className={styles.button}
      >
        C4080
      </Link>
      <Link
        to="C3080"
        onClick={() => errors.selectMachine(C3080)}
        className={styles.button}
      >
        C3080
      </Link>
      <Link
        to="C6000"
        onClick={() => errors.selectMachine(C6000)}
        className={styles.button}
      >
        C6000
      </Link>
    </>
  );
});

export default Color;
