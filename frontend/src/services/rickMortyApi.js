import axios from 'axios';

const RICK_MORTY_API_PATH = 'http://localhost:3060/api/';

class RickMortyApi {
	constructor() {
		this.api = axios.create({
			baseURL: RICK_MORTY_API_PATH,
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
		const response = await this.api.get('character', {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	getCharacter = async (id) => {
		const response = await this.api.get(`character/${id}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	addFav = async (id) => {
		const response = await this.api.post('fav', {char_id: id, fav: true}, {
			headers: this.getHeaders(),
		});

		return response.data;
	};

	deleteFav = async (id) => {
		const response = await this.api.delete(`fav/${id}`, {
			headers: this.getHeaders(),
		});

		return response.data;
	};
}

export default new RickMortyApi();
