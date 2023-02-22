import React from 'react'
import { useNavigate  } from 'react-router-dom'

const HomePage = () => {
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

	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={ goProfile }>
				Go to Profile
			</button>
			<button onClick={ goBack }>
				Go Back
			</button>
			<button onClick={ goForward }>
				Go Forward
			</button>
		</div>
	)
}

export default HomePage
