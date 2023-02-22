import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Child = ({ name, send, update }) => {
	const messageRef = useRef('')
	const nameRef = useRef('')

	function pressButton() {
		alert('Default text')
	}

	function pressButtonParams(text) {
		alert(`Text: ${text}`)
	}

	function submitName(e) {
		e.preventDefault()
		update(nameRef.current.value)
	}

	return (
		<div>
			<p onMouseOver={ () => console.log('Mouse Over') }>
				Hello, { name }
			</p>
			<button onClick={ () => console.log('Pulsar boton 1') }>
				<span>Boton 1</span>
			</button>
			<button onClick={ pressButton }>
				<span>Boton 2</span>
			</button>
			<button onClick={ () => pressButtonParams('Hello') }>
				<span>Boton 3</span>
			</button>
			<input
				placeholder='Input React'
				onFocus={ () => console.log('Input focus') }
				onChange={ (e) => console.log(e.target.value) }
				ref={ messageRef }>
			</input>
			<button onClick={ () => send(messageRef.current.value) }>
				<span>Send Message</span>
			</button>

			<div>
				<form onSubmit={ submitName }>
					<input
						placeholder='Update new name'
						ref={ nameRef }
					/>
					<button type='submit'>
						<span>Update Name</span>
					</button>
				</form>
			</div>
		</div>
	)
}


Child.propTypes = {
	name: PropTypes.string,
	send: PropTypes.func,
	update: PropTypes.func,
}

export default Child
