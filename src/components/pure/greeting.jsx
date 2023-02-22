import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Greeting extends Component {

	constructor (props) {
		super(props)
		this.state = {
			age : 26
		}
	}

	birthday() {
		this.setState((prevState) => (
			{
				age: prevState.age + 1
			}
		))
	}

	render() {
		return (
			<div>
				<h1>Hi { this.props.name }!</h1>
				<h2>You are { this.state.age } years old.</h2>
				<div>
					<button onClick={this.birthday}>
						<span>Birthday!</span>
					</button>
				</div>
			</div>
		)
	}
}

// Content of component that can be pass by a parent component
Greeting.propTypes = {
	name: PropTypes.string,
}


export default Greeting
