/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 *
 * rcc
 */

import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class LifeCycleExample extends Component {
	static propTypes = { second: third }

	constructor(props) {
		super(props);
		console.log('CONSTRUCTOR: Cuando se instancia el componente');
	}

	render() {
		return (
			<div>LifeCycleExample</div>
		)
	}
}
