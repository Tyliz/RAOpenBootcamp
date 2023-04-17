import React, {
} from 'react'
import {
	BrowserRouter,
	Route,
	Routes
} from 'react-router-dom'


// estilos
import '../App.css'


// fontaweasome
import '@fortawesome/fontawesome-svg-core/styles.css'


// Pages
import NotFoundPage from '../pages/404/NotFoundPage'
import ChuckJokes from '../components/pure/ChuckJokes'


function LayoutChuck() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <ChuckJokes /> } />
				<Route path='*' element={ <NotFoundPage /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default LayoutChuck
