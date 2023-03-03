import React from 'react'

const AsyncExample = () => {
	const saveSessionStorage = async (key, value) => {
		await sessionStorage.setItem(key, value)

		return Promise.resolve(sessionStorage.getItem(key))
	}

	const showSessionStorage = () => {
		saveSessionStorage('name', 'Tyliz')
			.then((response) => {
				alert(`Save name:  ${response}`)
			})
	}

	const generateNumber = async () => {
		return 1
	}

	const generatePromiseNumber = async () => {
		return Promise.resolve(2)
	}

	const obtainNumber = () => {
		generateNumber()
			.then((response) => {
				alert(response)
			})
			.catch((error) => {
				alert(error)
			})
	}

	const obtainPromiseNumber = () => {
		generatePromiseNumber()
			.then((response) => {
				alert(response)
			})
			.catch((error) => {
				alert(error)
			})
	}

	const showStorage = () => {
		saveSessionStorage('name', 'Tyliz')
			.then((response) => {
				let value = response
				alert(`Saved name: ${value}`)
			}).catch((error) => {
				alert(`Something went wrong: ${error}`)
			}).finally(() => {
				console.log('Finally instruction')
			})
	}

	const obtainMessage = async () => {
		let promise = new Promise((resolve) => {
			setTimeout(() => resolve('Hello World'), 2000)
		})

		let message = await promise

		await alert(`Message recived: ${message}`)
	}

	const returnError = async () => {
		await Promise.reject(new Error('Ooooops!'))
	}

	const consumeError = () => {
		returnError()
			.then((response)=> {
				alert(`Everything is ok: ${response}`)
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`)
			})
			.finally(() => console.log('Finally executed'))
	}

	const urlNotFound = async () => {
		try {
			let response = await fetch('https://invalidURL.com')
			alert(`Response: ${JSON.stringify(response)}`)
		} catch (error) {
			alert(`Something went wrong with your url: ${error}`)
		}
	}

	const multiplePromise = async () => {
		let results = await Promise.all(
			[
				fetch('https://reqres.in/api/users'),
				fetch('https://reqres.in/api/users?page=2'),
			]
		).catch((error) => {
			alert(`Something went wrong with your URLs: ${error}`)
		})
		alert(`Results: ${JSON.stringify(results)}`)
	}

	return (
		<div>
			<h1>Async Examples</h1>
			<button onClick={ obtainNumber }>
				Obtain Number
			</button>
			<button onClick={ obtainPromiseNumber }>
				Obtain Promise Number
			</button>
			<button onClick={ showSessionStorage }>
				Show session Storage
			</button>
			<button onClick={ showStorage }>
				Save Name and Show
			</button>
			<button onClick={ obtainMessage }>
				Send message in 2 sec
			</button>
			<button onClick={ consumeError }>
				Obtain Error
			</button>
			<button onClick={ urlNotFound }>
				Request to unknow URL
			</button>
			<button onClick={ multiplePromise }>
				Multiple promises
			</button>
		</div>
	)
}

export default AsyncExample
