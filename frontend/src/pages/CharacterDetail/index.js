import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Portrait from 'components/Portrait';
import { getCharacter, toggleFav } from 'store/character/actions';
import { CHARACTER_DETAIL_FAV_UPDATE } from 'store/character/actionNames';

import styles from './styles.module.scss';

const CharacterDetail = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const detailId = params.detailId ? parseInt(params.detailId, 10) : undefined;
    const { characterDetail } = useSelector((state) => state.character);

    useEffect(() => {
        dispatch(getCharacter(detailId));
    }, [dispatch, detailId]);

    return (
        <div className={styles.container}>
            {characterDetail &&
                <Portrait
                    name={characterDetail.name}
                    status={characterDetail.status}
                    species={characterDetail.species}
                    gender={characterDetail.gender}
                    residence={characterDetail.location.name}
                    origin={characterDetail.origin.name}
                    imgSource={characterDetail.image}
                    fav={characterDetail.fav}
                    onFavClick={() => dispatch(toggleFav(characterDetail, CHARACTER_DETAIL_FAV_UPDATE))}
                />
            }

        </div>
    );
}

export default CharacterDetail;
