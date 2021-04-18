import { CHARACTERS_UPDATE, CHARACTERS_FAV_UPDATE, CHARACTER_DETAIL_UPDATE, CHARACTER_DETAIL_FAV_UPDATE } from './actionNames';

const INITIAL_STATE = {
	isChangedCharacter: true,
	characters: [],
	characterDetail: undefined
};

const updateCharacter = (characters, newChar) => {
	const index = characters.findIndex((item) => item.id === newChar.id);
	characters[index] = newChar;

	return characters;
}

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CHARACTERS_UPDATE: {
			return {
				...state,
				characters: Object.values(payload),
				isChangedCharacter: false,
			};
		}
		case CHARACTERS_FAV_UPDATE: {
			return {
				...state,
				characters: updateCharacter(state.characters, payload),
			};
		}
		case CHARACTER_DETAIL_FAV_UPDATE: {
			return {
				...state,
				characterDetail: payload,
			};
		}
		case CHARACTER_DETAIL_UPDATE: {
			return {
				...state,
				characterDetail: payload,
			};
		}
		default:
			return state;
	}
};

export default reducers;
