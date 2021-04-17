import axios from 'axios';

class RickMortyApi {
	constructor() {
		this.api = axios.create({
			baseURL: 'http://localhost:3030/api/',
			headers: {
				'Content-type': 'application/json',
			},
		});
	}

	getHeaders = () => {
		const user = JSON.parse(localStorage.getItem('user'));

		if (user && user.token) {
			return { Authorization: `Bearer ${user.token}` };
		}
		return {};
	};

	userSignin = async ({ email, password }) => {
		const response = await this.api.post('user/signin', {
			email,
			password,
		});
		return response.data;
	};

	getCharacters = async () => {
		const response = await this.api.get('character');

		return response.data;
	};

	addFav = async (id) => {
		const response = await this.api.post('fav', {char_id: id, fav: true});

		return response.data;
	};

	deleteFav = async (id) => {
		const response = await this.api.delete(`fav/${id}`);

		return response.data;
	};
}

export default new RickMortyApi();
