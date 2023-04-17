import APIRequest from '../utils/axios/chuck.config'


export function generateNewJoke() {
	return APIRequest.get('/jokes/random', {
		validateStatus: function (status) {
			return status < 500
		}
	})
}
