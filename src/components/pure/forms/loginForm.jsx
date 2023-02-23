import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	ErrorMessage,
	Field,
	Form,
	Formik,
} from 'formik'
import React from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {

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

	const actionLogin = async (values) => {
		await new Promise((response) => {
			setTimeout(response, 1000)
		})
		localStorage.setItem('credential', JSON.stringify(values, null, 2))
		navigate('/', { replace: true })
	}

	return (
		<div className='border border-1 border-primary rounded-3 p-3 col-md-6 offset-md-3'>
			<h4>Login Formik</h4>
			<hr />
			<Formik initialValues={ initialValues } onSubmit={ actionLogin } validationSchema={ loginSchema }>

				{/* We obtain props from Formik
							values,
							touched,
							errors,
							isSubmitting,
							handleChange,
							handleBlur,
				 */}

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
										Cancel <FontAwesomeIcon icon='fa-solid fa-ban'/>
									</button>
									<button type='submit' className='btn btn-success m-1'>
										Login <FontAwesomeIcon icon='fa-solid fa-key' />
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
	)
}

export default LoginForm
