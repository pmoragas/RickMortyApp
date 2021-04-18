import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './styles.module.scss';
import redHeart from 'assets/red_heart.png';
import greyHeart from 'assets/grey_heart.png';

const DATA_POINTS = ['gender', 'residence', 'origin'];

const Card = (props) => {
    const {name, status, species, imgSource, fav} = props;
    return (
        <div className={styles.container}>
            <img className={styles.pic} src={imgSource} alt={name}/>
            <div className={styles.content}>
                <img
                    className={styles.fav}
                    src={fav ? redHeart : greyHeart}
                    alt="Favorite"
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
                        <div className={styles.data}>{props[item]}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	species: PropTypes.string.isRequired,
	imgSource: PropTypes.string.isRequired,
	fav: PropTypes.bool.isRequired,
};

export default Card;
