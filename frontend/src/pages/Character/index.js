import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'components/Card';
import { CHARACTERS_DETAIL_PATH } from 'router/paths';
import { getCharacters } from 'store/character/actions';

import styles from './styles.module.scss';

const Character = () => {
    const dispatch = useDispatch();
    const { characters } = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {characters.length > 0 && characters.map((item,index) =>
                <Link
                    key={index}
                    className={styles.link}
                    to={CHARACTERS_DETAIL_PATH.replace(':detailId', item.id)}>
                    <Card
                        name={item.name}
                        status={item.status}
                        species={item.species}
                        gender={item.gender}
                        residence={item.location.name}
                        origin={item.origin.name}
                        imgSource={item.image}
                        fav={item.fav}
                    />
                </Link>
            )};
        </div>
    );
}

export default Character;
