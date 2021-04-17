import axios from 'axios';

class RickMortyApi {
	constructor() {
		this.api = axios.create({
			baseURL: process.env.RICK_MORTY_API,
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
}

export default new RickMortyApi();
