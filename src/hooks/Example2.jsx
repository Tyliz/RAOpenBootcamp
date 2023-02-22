/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */

import React, { useState, useRef, useEffect } from 'react'

const Example2 = () => {

	// Contadores cada uno en diferentes estados
	const [contador1, setContador1] = useState(0)
	const [contador2, setContador2] = useState(0)

	// Creamos una referencia con useRef() para asociar una variable
	// con un elemento DOM del componente (vista HTML)
	const myRef = useRef()

	function incrementar1() {
		setContador1(contador1 + 1)
	}

	function incrementar2() {
		setContador2(contador2 + 1)
	}

	/**
	 * Trabajando con useEffect
	 */

	/**
	 * ? Caso 1: Ejecutar SIEMPRE un snippert de código
	 * Cada vez que haya un cambio en el estado del componente
	 * se ejecuta aquello que este dentro del useEffect()
	 */

	// useEffect(() => {
	//	 console.log('Cambio en el estado del componente')
	//	 console.log('Mostrando Referencia a elemento del DOM')
	//	 console.log(myRef)
	// })

	/**
	 * ? Caso 2: Ejecutar solo cuando se cambie el contador 1
	 * Cada ve que haya un cambio en el contador 1
	 * En caso de cambiar el contador 2 no habrá ejecución
	 */

	// useEffect(() => {
	//	 console.log('Cambio el estado del contador 1')
	//	 console.log('Mostrando Referencia a elemento del DOM')
	//	 console.log(myRef)
	// }, [contador1])

	/**
	 * ? Caso 2: Ejecutar solo cuando se cambie el contador 1 o el contador 2
	 * Cada ve que haya un cambio en el contador 1 o contador 2
	 */

	useEffect(() => {
		console.log('Cambio el estado del contador 1 / contador 2')
		console.log('Mostrando Referencia a elemento del DOM')
		console.log(myRef)
	}, [contador1, contador2])


	return (
		<div>
			<h1>*** Ejemplo de useState(), useRef() y useEffect() ***</h1>
			<h2>CONTADOR 1: { contador1 }</h2>
			<h2>CONTADOR 2: { contador2 }</h2>
			{/* Elemento referenciado */}
			<h4 ref={ myRef }>
				Ejemplo de elemento referenciado
			</h4>
			{/* Botones para cambiar los contadores */}
			<div>
				<button onClick={ incrementar1 }> Incrementar 1 </button>
				<button onClick={ incrementar2 }> Incrementar 2 </button>
			</div>
		</div>
	)
}

export default Example2
