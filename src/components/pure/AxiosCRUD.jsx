import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faBan,
	faKey,
	faPager,
	faUser,
} from '@fortawesome/free-solid-svg-icons'
import {
	ErrorMessage,
	Field,
	Form,
	Formik,
} from 'formik'
import React from 'react'
import {
	login,
	getAllUsers,
	getPagedUsers,
} from '../../services/AxiosCRUDServices'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const AxiosCRUD = () => {

	const navigate = useNavigate()

	const loginSchema = Yup.object().shape(
		{
			email: Yup.string()
				.email('Invalid email format')
				.required('Email is required'),
			password: Yup.string().required('Password is required'),
		}
	)

	const initialValues = {
		email: '',
		password: '',
	}

	const submitLogin = async (values) => {
		// await login('eve.holt@reqres.in', 'cityslicka')
		await login(values.email, values.password)
			.then((response) => {
				if (response.data.token) {
					alert(JSON.stringify(response.data.token))
					sessionStorage.setItem('TokenSession', response.data.token)
				} else {
					sessionStorage.removeItem('TokenSession')
					throw new Error('Login failure!!')
				}
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`)
			})
			.finally(() => {
				console.log('Login done!')
			})
		// window.location.reload()
	}

	const goSingin = (e) => {
		e.preventDefault()
		navigate('/Singin', { replace:true })
	}

	// CRUD Examples
	const obtainAllUsers = () => {
		getAllUsers()
			.then((response) => {
				alert(JSON.stringify(response.data.data))
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`)
			})
	}

	const obtainPagedUsers = (page) => {
		getPagedUsers(page)
			.then((response) => {
				alert(JSON.stringify(response.data.data))
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`)
			})
	}

	return (
		<div className='center-layoud padding-layoud'>
			<div className='loginContent'>
				<h4>Login Formik</h4>
				<hr />
				<Formik initialValues={ initialValues } onSubmit={ submitLogin } validationSchema={ loginSchema }>
					{
						({ isSubmitting }) => {
							return (
								<Form >
									<div className='form-field'>
										<label htmlFor='email' className='form-field__label'>Email:</label>
										<Field id='email' name='email' className='form-field__input' placeholder='example@default.com' />
										<ErrorMessage name='email' component='div' className='error-message' />
									</div>
									<div className='form-field'>
										<label htmlFor='password' className='form-field__label'>Password:</label>
										<Field id='password' name='password' type='password' className='form-field__input' placeholder='Password' />
										<ErrorMessage name='password' className='error-message' component='div'></ErrorMessage>
									</div>
									<div className='text-center'>
										<button type='button' className='btn btn-danger m-1' onClick={ () => navigate('/', { replace: true }) }>
											Cancel <FontAwesomeIcon icon={ faBan } />
										</button>
										<button type='submit' className='btn btn-success m-1'>
											Login <FontAwesomeIcon icon={ faKey } />
										</button>
									</div>
									<hr className='hr-or'/>
									<div className='d-flex flex-column mt-3'>
										<button className='btn btn-primary' type='button' onClick={ goSingin } >
											Singin
										</button>
									</div>
									{ isSubmitting ? (
										<div className='loading'>
											<span className='loading__text'>Login...</span>
										</div>
									) : null }
								</Form>
							)
						}
					}
				</Formik>
			</div>
			<div>
				<button className='btn' onClick={ obtainAllUsers }>
					<FontAwesomeIcon icon={ faUser } /> Obtain All Users
				</button>
				<button className='btn' onClick={ () => obtainPagedUsers(2) }>
					<FontAwesomeIcon icon={ faPager } /> Obtain Paged Users
				</button>
			</div>
		</div>
	)
}

export default AxiosCRUD
