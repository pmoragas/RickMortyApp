import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'store/user/actions';
import FormLogin from 'containers/FormLogin';

import styles from './styles.module.scss';

const Login = () => {
    const dispatch = useDispatch();

    const onSubmitForm = (values) => {
      dispatch(login(values));
    };

    return (
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <FormLogin className={styles.formLogin} onSubmitForm={onSubmitForm} />
        </div>
      </div>
    );
  };

  export default Login;
