import React, {
} from 'react'
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes
} from 'react-router-dom'


// estilos
import './App.css'


// fontaweasome
// import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'


// Pages
import NotFoundPage from './pages/404/NotFoundPage'
import DashBoard from './layout/DashBoard'
import LoginForm from './components/pure/forms/loginForm'


// // config FontAwesome
// config.autoAddCss = false
// library.add(fas, far)


function AppRoutingFinal() {
	// TODO: change to sessionStorage or something else
	let loggedIn = true

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/'
					element={
						loggedIn ?
							<Navigate to='/dashboard' /> :
							<Navigate to='/login' />
					}
				/>
				<Route path='/dashboard' element={ <DashBoard/> } />
				<Route path='/login'
					element={
						!loggedIn ?
							<LoginForm/> :
							<Navigate to='/dashboard' />
					}
				/>
				<Route path='*' element={ <NotFoundPage /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default AppRoutingFinal
