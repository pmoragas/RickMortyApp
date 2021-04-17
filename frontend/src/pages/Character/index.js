import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'components/Card';
import { getCharacters, toggleFav } from 'store/character/actions';
import styles from './styles.module.scss';

const Character = () => {
    const dispatch = useDispatch();
    const { characters } = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(getCharacters());
    }, [dispatch]);

    return (
        <div className={styles.container}>
            {characters.map((item,index) =>
                <Card
                    key={index}
                    name={item.name}
                    status={item.status}
                    species={item.species}
                    gender={item.gender}
                    residence={item.location.name}
                    origin={item.origin.name}
                    imgSource={item.image}
                    fav={item.fav}
                    onFavClick={() => dispatch(toggleFav(item))}
                />
            )};
        </div>
    );
}

export default Character;
