import React from 'react';
import { useHistory } from 'react-router-dom';
import { CHARACTERS_PATH } from 'router/paths';

import error404 from'./404.png';
import styles from './styles.module.scss';

const Error404 = () => {
	const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.box} onClick={() => {
            history.push(CHARACTERS_PATH);
          }}>
	  	<img  src={error404} style={styles.image} alt="Wrong Universe 404"/>
		<p>Oops! Wrong Universe... 404</p>
      </div>
    </div>
  );
};

export default Error404;
