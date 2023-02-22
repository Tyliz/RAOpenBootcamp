import React from 'react'
import { useLocation, useNavigate  } from 'react-router-dom'

const AboutPage = () => {

	const location = useLocation()

	const navigate = useNavigate()

	const goHome = () => {
		console.log(location)
		navigate('/')
	}

	const goBack = () => {
		navigate(-1)
	}

	const goForward = () => {
		navigate(+1)
	}

	return (
		<div>
			<h1>
				About | FAQs Page
			</h1>
			<div>
				<button onClick={ goHome }>
					Go to Home
				</button>
				<button onClick={ goBack }>
					Go Back
				</button>
				<button onClick={ goForward }>
					Go Forward
				</button>
			</div>
		</div>
	)
}

export default AboutPage
