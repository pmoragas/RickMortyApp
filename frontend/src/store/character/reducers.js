import { CHARACTER_UPDATE } from './actionNames';

const INITIAL_STATE = {
	characters: [],
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case CHARACTER_UPDATE: {
			return {
				...state,
				characters: Object.values(payload),
			};
		}
		default:
			return state;
	}
};

export default reducers;
