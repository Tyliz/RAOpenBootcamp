import React, {
	useEffect,
	useState,
} from 'react'
import { useNavigate  } from 'react-router-dom'

const HomePage = () => {
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		setLogged(localStorage.getItem('credential')? true : false)
	}, [])
	const navigate = useNavigate()

	const goProfile = () => {
		navigate('/profile')
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
			{ logged ? (<button onClick={ goProfile }>
				Go to Profile
			</button>) : null}
			<button onClick={ goBack }>
				Go Back
			</button>
			<button onClick={ goForward }>
				Go Forward
			</button>
			{ logged ? (<button onClick={ logout }>
				Logout
			</button>) : null}
		</div>
	)
}

export default HomePage
