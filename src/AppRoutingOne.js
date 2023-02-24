import React, {
	useEffect,
	useState,
} from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'


import './App.css'
import '@fortawesome/fontawesome-svg-core/styles.css'

// Pages
import HomePage from './pages/home/HomePage'
import TaskPage from './pages/tasks/TaskPage'
import NotFoundPage from './pages/404/NotFoundPage'
import ProfilePage from './pages/profile/ProfilePage'
import LoginPage from './pages/auth/LoginPage'
import SinginPage from './pages/singin/SinginPage'
import Menu from './layout/Menu'


import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false
library.add(fas, far)


function AppRoutingOne() {
	const [logged, setLogged] = useState(false)

	useEffect(() => {
		setLogged(localStorage.getItem('credential')? true : false)
	}, [])

	return (
		<Router>
			<Menu />
			<main className='App-content'>
				{/* Switch => Routes version 6.8.1 */}
				<Routes path='/'>
					{/* component => element version 6.8.1 */}
					<Route index element={ <HomePage /> } />
					<Route path='Profile' element={ logged ? <ProfilePage /> : <Navigate to='/' /> } />
					<Route path='Login' element={ !logged ? <LoginPage /> : <Navigate to='/' /> } />
					<Route path='Singin' element={ !logged ? <SinginPage /> : <Navigate to='/' /> } />
					<Route path='/Task' element={ logged ? <TaskPage /> : <Navigate to='/' /> } >
					</Route>
					<Route path='*' element={ <NotFoundPage /> } />
				</Routes>
			</main>
		</Router>
	)
}

export default AppRoutingOne
