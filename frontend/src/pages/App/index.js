import {logout} from 'store/user/actions';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { CHARACTERS_PATH } from 'router/paths';
import logo from 'assets/rick_morty_logo.png';
import styles from './styles.module.scss';

const App = ({children}) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Link
          className={styles.link}
          to={CHARACTERS_PATH}
        >
          <img className={styles.logo} src={logo} alt="Rick Morty Logo"/>
        </Link>
        <button onClick={()=> dispatch(logout())}>Logout</button>
      </div>
      <div className={styles.content}>
				{children}
			</div>
    </div>
  );
}

export default App;
