/**
 * Componente que va a contener un formulario para la
 * autenticación de usuarios
 * rfc
 */

import {
	ErrorMessage,
	Field,
	Form,
	Formik,
} from 'formik'
import React from 'react'
import * as Yup from 'yup'

const LoginForm = () => {

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
		localStorage.setItem('credentials', values)
		alert(JSON.stringify(values, null, 2))
	}

	return (
		<div>
			<h4>Login Formik</h4>
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
					({ errors, touched, isSubmitting, }) => {
						return (
							<Form>
								<label htmlFor='email'>Email:</label>
								<Field id='email' name='email' placeholder='example@default.com' />
								{
									errors.email && touched.email && (
										<div className='error-message'>
											{ errors.email }
										</div>
									)
								}

								<label htmlFor='password'>Password:</label>
								<Field id='password' name='password' type='password' placeholder='Password' />
								<ErrorMessage name='password' className='error-message' component='div'></ErrorMessage>

								<button type='submit'>
									Login
								</button>
								{ isSubmitting ? (<p>Submitting...</p>) : null }
							</Form>
						)
					}
				}
			</Formik>
		</div>
	)
}

export default LoginForm
