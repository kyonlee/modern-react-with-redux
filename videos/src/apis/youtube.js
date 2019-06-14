import axios from 'axios';

const KEY = 'AIzaSyABg1YbkZA8eTOdotM_p30Q2UnljXOL_qQ';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY
	}
});
