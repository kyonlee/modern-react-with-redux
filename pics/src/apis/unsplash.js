import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID 00eb3ca760b2b55531b9462c9fcec58e21bc512052e95792f5f5e2c117c35ab1'
	}
});
