import { CHARACTERS_UPDATE, CHARACTER_DETAIL_UPDATE } from './actionNames';
import RickMortyApi from 'services/rickMortyApi';

export const getCharacters = () => async (dispatch) => {
	try {
		const response = await RickMortyApi.getCharacters();

		dispatch({
            type: CHARACTERS_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};

export const getCharacter = (id) => async (dispatch) => {
	try {
		const response = await RickMortyApi.getCharacter(id);

		dispatch({
            type: CHARACTER_DETAIL_UPDATE,
            payload: { ...response },
        });
	} catch (error) {
		console.log(error)
	}
};

export const toggleFav = (item, actionName) => async (dispatch) => {
	try {
		if (item.fav) {
			await RickMortyApi.deleteFav(item.id);
		} else {
			await RickMortyApi.addFav(item.id);
		}

		item.fav = !item.fav;

		dispatch({
            type: actionName,
            payload: { ...item },
        });
	} catch (error) {
		console.log(error)
	}
};