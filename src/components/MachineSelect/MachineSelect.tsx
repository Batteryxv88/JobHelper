import styles from './machineSelect.module.css';
import { observer } from 'mobx-react-lite';
import errors from '../../store/errors';
import { C6100 } from '../../store/C6100';
import { C6000 } from '../../store/C6000';
import { C7100 } from '../../store/C7100';
import { C3080 } from '../../store/C3080';
import { C4080 } from '../../store/C4080';
import { C14000 } from '../../store/C14000';
import { Link } from 'react-router-dom';

import { textBrake } from '../../helpers/textBrake';
import { B1250S } from '../../store/sourceFiles/B1250S';


const MachineSelect = observer(() => {

// const machineSelectHandler = (machineArr: any, machine: any) => {
//   console.log(machineArr + "sccsscsc")
// errors.selectMachine(machineArr)
// errors.modelState = machine
// }

///////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////

  return (
    <>
      <div className={styles.select}>
      <Link
        to="/select/color"
        
        className={styles.button}
      >
        Color
      </Link>
      <Link
        to="/select/black"
        
        className={styles.button}
      >
        Black
      </Link>
      </div>
    </>
  );
});

export default MachineSelect;
