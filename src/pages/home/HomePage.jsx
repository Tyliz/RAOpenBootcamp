import React, {
	useEffect,
	useState,
} from 'react'
import { useNavigate  } from 'react-router-dom'

const HomePage = () => {
	const [credential, setCredential] = useState(undefined)

	useEffect(() => {
		setCredential(localStorage.getItem('credential'))
	}, [])
	const navigate = useNavigate()

	const goProfile = () => {
		navigate('/Profile')
	}

	const goBack = () => {
		navigate(-1)
	}

	const goForward = () => {
		navigate(+1)
	}

	const logout = () => {
		localStorage.removeItem('credential')
		navigate('/Login', { replace: true })
	}

	return (
		<div>
			<h1>Home Page</h1>
			<div className='d-flex gap-3'>
				{ credential ? (<button className='btn btn-primary' onClick={ goProfile }>
					Go to Profile
				</button>) : null}
				<button className='btn btn-primary' onClick={ goBack }>
					Go Back
				</button>
				<button className='btn btn-primary' onClick={ goForward }>
					Go Forward
				</button>
				{ credential ? (<button className='btn btn-primary' onClick={ logout }>
					Logout
				</button>) : null}
			</div>
		</div>
	)
}

export default HomePage
