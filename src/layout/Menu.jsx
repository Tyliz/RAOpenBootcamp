import React, {
	useState,
	useEffect,
} from 'react'
import {
	Link,
} from 'react-router-dom'

const Menu = () => {
	const [credential, setCredential] = useState(undefined)

	useEffect(() => {
		setCredential(localStorage.getItem('credential'))
	}, [])

	const getLinks = () => {
		const links = []
		if (credential) {
			links.push({ route:'/Profile', text: 'PROFILE' })
			links.push({ route:'/Task', text: 'TASKS' })
			return links
		}
		links.push({ route:'/Login', text: 'LOGIN' })
		links.push({ route:'/Singin', text: 'SINGIN' })
		return links
	}

	const logout = (e) => {
		e.preventDefault()

		localStorage.removeItem('credential')
		setCredential(undefined)
		window.location.reload()
	}

	return (
		<nav className='menu-header'>
			<Link className='header-link' to='/'>HOME</Link>
			{ getLinks().map(({route, text}, index) =>
				(<Link key={ index } className='header-link' to={ route }>{ text }</Link>)
			)}
			{
				credential ?
					(<a className='header-link' onClick={ logout }>LOGOUT</a>):
					null
			}
		</nav>
	)
}

export default Menu
