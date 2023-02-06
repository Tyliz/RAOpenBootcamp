import axios from 'axios';
import React, { useState, useRef } from 'react';

const OptionRender = () => {
	const [access, setAccess] = useState(false);

	const txtEnlace = useRef('');
	const txtToken = useRef('');

	const updateAccess = () => {
		setAccess(!access);
	};

	const probarServicio = () => {
		let host = txtEnlace.current.value;
		const config = {
			headers:{
				'Content-Type': 'application/json',
			}
		};
		const data = {
			'username': 'Tyliz',
			'password': 'Supermac28.',
		};

		if (host == '') {
			host = 'http://127.0.0.1:8000/api/token/';
		}
		axios.post(host, data, config)
			.then((response) => {
				if (response.status === 200) {
					console.table(response.data);
				} else {
					throw new Error('No se pudo obtener el usuario');
				}
			})
			.catch((error) => {
				console.error(`[Error]: ${error}`);
			});
	};

	const probarServicioToken = () => {
		let host = txtEnlace.current.value;
		const config = {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${txtToken.current.value}`,
			}
		};

		if (host == '') {
			host = 'http://127.0.0.1:8000/api/users/';
		}
		axios.post(host, config)
			.then((response) => {
				if (response.status === 200) {
					console.table(response.data);
				} else {
					throw new Error('No se pudo obtener el usuario');
				}
			})
			.catch((error) => {
				console.error(`[Error]: ${error}`);
			});
	};

	let btnOptional;

	if (access) {
		btnOptional = (<button type='button' className={ access ? 'btn btn-danger' : 'btn btn-success' } onClick={ updateAccess }>Logout</button>);
	} else {
		btnOptional = (<button type='button' className={ access ? 'btn btn-danger' : 'btn btn-success' } onClick={ updateAccess }>Login</button>);
	}

	return (
		<div>
			<div className='row mb-3'>
				{ btnOptional }
			</div>
			<div className='row mb-3'>
				<div className='col-12'>
					<label htmlFor='txtLinkApi'>Host:</label>
					<input type='text' id='txtLinkApi' className='form-control' ref={ txtEnlace } defaultValue='http://127.0.0.1:8000/api/token/'></input>
				</div>
			</div>
			<div className='row mb-3'>
				<button type='button' className='btn btn-success' onClick={ probarServicio }>Probar Servicio</button>
			</div>
			<div className='row mb-3'>
				<div className='col-12'>
					<label htmlFor='txtToken'>Token:</label>
					<input type='text' id='txtToken' className='form-control' ref={ txtToken }></input>
				</div>
			</div>
			<div className='row mb-3'>
				<button type='button' className='btn btn-success' onClick={ probarServicioToken }>Probar Token</button>
			</div>
		</div>
	);
};

export default OptionRender;
