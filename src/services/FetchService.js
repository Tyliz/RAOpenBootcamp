export const getAllUsers = async () => {
	let response = await fetch('https://reqres.in/api/users')
	// console.log('Response:', response)
	// console.log('Status:', response.status)
	// console.log('Ok?', response.ok)
	// We return the json
	return await response.json()
}

export const getAllPagedUsers = async (page) => {
	console.log('page actual', page)
	let response = await fetch(`https://reqres.in/api/users?page=${page}`)
	console.log('Response:', response)
	console.log('Status:', response.status)
	console.log('Ok?', response.ok)
	// We return the json
	return response.json()
}

export const getUser = async (idUser) => {
	let response = await fetch(`https://reqres.in/api/users/${idUser}`)
	// We return the json
	return response.json()
}
