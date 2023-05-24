import React, {
	useState,
	useEffect,
} from 'react'
import { getRandomUser } from '../../services/AxiosServices'


const AxiosExample = () => {
	const [user, setUser] = useState(undefined)

	useEffect(() => {
		obtainUser()
	}, [])

	const obtainUser = () => {
		getRandomUser()
			.then((response) => {
				if (response.status === 200){
					setUser(response.data.results[0])
				}
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`)
			})
	}


	return (
		<div className='center-layoud'>
			<h1 className='title'>Axios Example</h1>
			{ user !== undefined ?
				(
					<div>
						<img alt='avatar' src={ user.picture.large } />
						<h2>{ user.name.title } { user.name.first } { user.name.last }</h2>
						<h3>{ user.email }</h3>
					</div>
				) :
				(
					<div>
					</div>
				)
			}
			<div>
				<p>Generate a new User</p>
				<button onClick={ obtainUser }>
					Random User
				</button>
			</div>
		</div>
	)
}

export default AxiosExample
