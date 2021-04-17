import { CHARACTER_UPDATE } from './actionNames';
import RickMortyApi from 'services/rickMortyApi';

export const getCharacters = () => async (dispatch) => {
	try {
		const response = await RickMortyApi.getCharacters();

		dispatch({
            type: CHARACTER_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};

export const toggleFav = (item) => async (dispatch) => {
	try {
		if (item.fav) {
			await RickMortyApi.deleteFav(item.id);
		} else {
			await RickMortyApi.addFav(item.id);
		}

		const response = await RickMortyApi.getCharacters();

		dispatch({
            type: CHARACTER_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};