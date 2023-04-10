import APIRequest from '../utils/axios/axios.config'


export function getRandomUser() {
	return APIRequest.get('/', {
		validateStatus: function (status) {
			return status < 500
		}
	}) // https://randomuser.me/api/
}
