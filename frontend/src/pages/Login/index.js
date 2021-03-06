import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from 'store/user/actions';
import FormLogin from 'containers/FormLogin';
import { CHARACTERS_PATH } from 'router/paths';
import logo from 'assets/rick_morty_logo.png';

import styles from './styles.module.scss';

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const onSubmitForm = (values) => {
    dispatch(login(values));
  };

  useEffect(() => {
    const isDirectRouting = history.action === 'POP';

    if (isDirectRouting) {
      const state = { from: {}, forbidden: false };

      history.replace(state);
    }

    if (user) {
      const { from } = location.state || { from: { pathname: CHARACTERS_PATH } };

      history.replace(from);
    }
  }, [history, location.state, user]);

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt="Rick Morty Logo"/>
      <div className={styles.formContainer}>
        <FormLogin className={styles.formLogin} onSubmitForm={onSubmitForm} />
      </div>
    </div>
  );
  };

  export default Login;
