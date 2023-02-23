import React from 'react'
import ReactDOM from 'react-dom/client'
// Se añade los estilos de bootstrap
import 'bootstrap/dist/css/bootstrap.css'
// ! Importante: los estilos propios, deben ir despues de los estilos de bootstrap
import './index.css'
import './styles/app.scss'
// import App from './App'
import AppRoutingFinal from './AppRoutingFinal'
// import AppRoutingOne from './AppRoutingOne'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<AppRoutingFinal />
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
