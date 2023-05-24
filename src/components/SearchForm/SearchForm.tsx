import styles from './searchForm.module.css';
import { useState, SyntheticEvent } from 'react';
import errors from '../../store/errors';
import { observer } from 'mobx-react-lite';
import ErrorCode from '../ErrorCode/ErrorCode';


const SearchForm = observer (() => {
  const [errNum, setErrNum] = useState<string>('');

  const setInputHandler = (evt: React.FormEvent<HTMLInputElement>) => {
    setErrNum(evt.currentTarget.value.toUpperCase());
  };

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();
    errors.findError(errNum);
    setErrNum('')
  };

  return (
    <div className={styles.search}>
      <h2 className={styles.header}>{}</h2>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.input}
          onChange={setInputHandler}
          placeholder="3801"
          value={errNum}
        ></input>
        <button type="submit" className={styles.button} />
      </form>
      {errors.errorState === null? errors.errorState: <ErrorCode />}
    </div>
  );
});

export default SearchForm;
