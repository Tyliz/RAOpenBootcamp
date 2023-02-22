import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
} from 'react-router-dom'


import './App.css'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'


import HomePage from './pages/home/HomePage'
import TaskPage from './pages/tasks/TaskPage'
import NotFoundPage from './pages/404/NotFoundPage'
import AboutPage from './pages/about-faqs/AboutPage'
import ProfilePage from './pages/profile/ProfilePage'

import { User } from './models/user.class'
import { ROLES } from './models/roles.enum'


config.autoAddCss = false
library.add(fas, far)

function AppRoutingOne() {
	const user = new User(
		'Tyliz',
		'caosavenger@gmail.com',
		'',
		ROLES.USER,
	)

	return (
		<Router>
			<div>
				<aside>
					<Link className='link' to='/'>|| HOME |</Link>
					<Link className='link' to='/About'>| About |</Link>
					<Link className='link' to='/Task'>| Tasks |</Link>
					<Link className='link' to='/Profile'>| Profile ||</Link>
				</aside>

				<main className='App'>
					{/* Switch => Routes version 6.8.1 */}
					<Routes path='/'>
						{/* component => element version 6.8.1 */}
						<Route index element={ <HomePage /> } />
						<Route path='About' element={ <AboutPage  /> } />
						<Route path='Profile' element={ <ProfilePage user={ user } /> } />
						<Route path='Task' element={ <TaskPage /> } />
						<Route path='*' element={ <NotFoundPage /> } />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default AppRoutingOne
