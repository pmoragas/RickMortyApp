import { USER_UPDATE } from './actionNames';

const INITIAL_STATE = {
	user: JSON.parse(localStorage.getItem('user')),
};

const reducers = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case USER_UPDATE: {
			return {
				...state,
				...payload,
			};
		}
		default:
			return state;
	}
};

export default reducers;
