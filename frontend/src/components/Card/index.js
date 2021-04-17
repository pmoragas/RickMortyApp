import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import redHeart from './red_heart.png';
import greyHeart from './grey_heart.png';

const DATA_POINTS = ['Gender', 'Residence', 'Origin'];

const Card = (props) => {
    const {name, status, species, imgSource, fav, onFavClick} = props;
    return (
        <div className={styles.container}>
            <img className={styles.pic} src={imgSource} alt={name}/>
            <div className={styles.content}>
                <img
                    className={styles.fav}
                    src={fav ? redHeart : greyHeart}
                    alt="Favorite"
                    onMouseOver={e => (e.currentTarget.src = redHeart)}
                    onMouseOut={e => (e.currentTarget.src = fav ? redHeart : greyHeart)}
                    onClick={onFavClick}
                />
                <div className={styles.main}>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.status}>
                        <div className={classnames(styles.statusCircle, status.toLowerCase())}></div>{status} - {species}
                    </div>
                </div>
                {DATA_POINTS.map((item, index) => (
                    <div key={index} className={styles.dataPoint}>
                        <div className={styles.title}>{item}:</div>
                        <div className={styles.data}>{props[item.toLowerCase()]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;
