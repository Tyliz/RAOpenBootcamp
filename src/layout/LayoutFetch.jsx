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
import FetchExample from '../components/pure/FetchExample'
import FetchUser from '../components/pure/FetchUser'
import AxiosExample from '../components/pure/AxiosExample'
import AxiosCRUD from '../components/pure/AxiosCRUD'


function LayoutFetch() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <FetchExample /> } />
				<Route path='/axios' element={ <AxiosExample /> } />
				<Route path='/axios/crud' element={ <AxiosCRUD /> } />
				<Route path='/User/:idUser' element={ <FetchUser /> } />
				<Route path='*' element={ <NotFoundPage /> } />
			</Routes>
		</BrowserRouter>
	)
}

export default LayoutFetch
