import React, {
	useEffect,
	useState,
} from 'react'
import {
	useParams,
	useNavigate,
	Link,
} from 'react-router-dom'
import { getUser } from '../../services/FetchService'


const FetchUser = () => {
	const params = useParams()
	const navigator = useNavigate()
	const [user, setUser] = useState({})

	useEffect(() => {
		loadUser()
	}, [])

	const loadUser = async () => {
		const id = params.idUser
		await getUser(id)
			.then(response => {
				setUser(response.data)
			}).catch(() => {
				navigator('/', { replace: true })
			})
	}

	return (
		<div className='card-user card-user--avatar'>
			<div className='card-user__avatar'>
				<img src={ user.avatar } />
			</div>
			<div className='card-user__data'>
				<span><b>Email:</b> {user.email}</span>
				<span><b>Name:</b> {user.first_name} {user.last_name}</span>
			</div>
			<div className='card-user__options'>
				<Link className='btn' to='/' replace>
					Go to List
				</Link>
			</div>
		</div>
	)
}

export default FetchUser
