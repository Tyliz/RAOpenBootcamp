import React, {
	useEffect,
	useState,
} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Link,
	Routes,
	Navigate,
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
import LoginPage from './pages/auth/LoginPage'
import TaskDetailPage from './pages/tasks/TaskDetailPage'
import { Task } from './models/task.class'
import { LEVELS } from './models/levels.enum'


config.autoAddCss = false
library.add(fas, far)

function AppRoutingOne() {
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		setLogged(localStorage.getItem('credential')? true : false)
	}, [])

	const user = new User(
		'Tyliz',
		'caosavenger@gmail.com',
		'',
		ROLES.USER,
	)

	let lstTask = [
		new Task(
			1,
			'Example 1',
			'Default descripton 1',
			true,
			LEVELS.NORMAL
		),
		new Task(
			2,
			'Example 2',
			'Default descripton 2',
			false,
			LEVELS.URGENT
		),
		new Task(
			3,
			'Example 3',
			'Default descripton 3',
			false,
			LEVELS.BLOCKING
		)
	]

	return (
		<Router>
			<div>
				<aside>
					<Link className='link' to='/'>|| HOME |</Link>
					<Link className='link' to='/About'>| About |</Link>
					<Link className='link' to='/Task'>| Tasks |</Link>
					{ !logged ? (<Link className='link' to='/Login'>| Login ||</Link>): null}
					{ logged ? (<Link className='link' to='/Profile'>| Profile ||</Link>): null}
				</aside>

				<main className='App'>
					{/* Switch => Routes version 6.8.1 */}
					<Routes path='/'>
						{/* component => element version 6.8.1 */}
						<Route index element={ <HomePage /> } />
						<Route path='About' element={ <AboutPage  /> } />
						<Route path='Profile' element={ logged ? <ProfilePage user={ user } /> : <Navigate to='/' /> } />
						<Route path='Login' element={ !logged ? <LoginPage /> : <Navigate to='/' /> } />
						<Route path='*' element={ <NotFoundPage /> } />
						<Route path='/Task'>
							<Route index element={ <TaskPage /> } />
							<Route path=':idTask' element={ <TaskDetailPage /> }  />
						</Route>
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default AppRoutingOne
