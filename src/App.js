import React from 'react'
// import logo from './logo.svg'
import './App.css'

import { config, library } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

// import OptionRender from './components/pure/optionRender'
import TaskListComponent from './components/container/task_list'
// import RegisterForm from './components/pure/forms/registerForm'

config.autoAddCss = false
library.add(fas, far)

function App() {
	return (
		<div className='App'>
			{/* <header className="App-header"> */}
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* Rendering custom component "Greeting" */}
			{/* <Greeting name="Tyliz"></Greeting> */}
			{/* <Greetingf name="Tyliz"></Greetingf> */}
			<TaskListComponent></TaskListComponent>
			{/* <RegisterForm></RegisterForm> */}
			{/* <Example2></Example2> */}
			{/* <MiComponenteConContexto></MiComponenteConContexto> */}
			{/* <UsuarioComponent></UsuarioComponent> */}
			{/* </header> */}
			{/* <OptionRender></OptionRender> */}
		</div>
	)
}

export default App
