import { Field, Form, Formik } from 'formik'
import React from 'react'
import { ROLES } from '../../../models/roles.enum'
import { User } from '../../../models/user.class'
import * as Yup from 'yup'


const RegisterForm = () => {

	let user = new User()

	const submit = async (values) => {
		await new Promise((response) => {
			setTimeout(response, 1000)
		})
		console.log(values)
		console.log('ROLES', [...ROLES])
		user = new User(
			values.username,
			values.email,
			values.password,
			values.role,
		)
		alert(`User registred ${user.username}`)
	}

	const initialValues = {
		username: '',
		email: '',
		password: '',
		role: '',
	}

	const validateEmail = (value) => {
		let error

		if (!value) {
			error = 'Required'
			// error = ctx.CreateError({ message: 'Required' })
		} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
			// error = ctx.CreateError({ message: 'Invalid email address' })
			error = 'Invalid email address'
		}

		return error
	}

	const registerSchema = Yup.object().shape(
		{
			username: Yup.string()
				.required('Username is required')
				.min(4, 'Please enter more than 4 characters')
				.test(validateEmail)
				.max(15, 'Username too long'),
			email: Yup.string()
				.email('Invalid email format')
				.required('Email is required'),
			role: Yup.string()
				.required('Please select a role')
				.oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: User / Admin'),
			password: Yup.string()
				.required('Please enter a password')
				.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.:,;])[A-Za-z\d@$!%*?&.:,;]{8,}$/, 'Minimum 8, at least one uppercase letter, one lowercase letter, one number and one special character')
				.min(8, 'Password too short'),
			confirmPassword: Yup.string()
				.required('you must confirm the password')
				.oneOf([ (Yup.ref('password')? Yup.ref('password'): undefined) ],'Passwords must match!'),
		}
	)

	return (
		<div className='container'>
			<h1>Sing In</h1>
			<Formik initialValues={ initialValues } onSubmit={ submit } validationSchema={ registerSchema }>
				{
					({ errors, touched, isSubmitting, }) => {
						return (
							<Form>
								<div className='form-field'>
									<label htmlFor='username' className='form-field__label'>Username:</label>
									<Field id='username' name='username' className='form-field__input' placeholder='Username' />
									{
										errors.username && touched.username && (
											<div className='error-message'>
												{ errors.username }
											</div>
										)
									}
								</div>
								<div className='form-field'>
									<label htmlFor='email' className='form-field__label'>Email:</label>
									<Field id='email' name='email' type='email' className='form-field__input' placeholder='example@default.com' />
									{
										errors.email && touched.email && (
											<div className='error-message'>
												{ errors.email }
											</div>
										)
									}
								</div>
								<div className='form-field'>
									<label htmlFor='role' className='form-field__label'>Role:</label>
									<Field id='role' name='role' className='form-field__input' as='select'>
										<option>-- Select a Role --</option>
										{
											Object.keys(ROLES).map((key) =>
												(<option key={ key } value={ ROLES[key] }>{ ROLES[key] }</option>)
											)
										}
									</Field>
									{
										errors.role && touched.role && (
											<div className='error-message'>
												{ errors.role }
											</div>
										)
									}
								</div>
								<div className='form-field'>
									<label htmlFor='password' className='form-field__label'>Password:</label>
									<Field id='password' name='password' className='form-field__input' type='password' placeholder='Password' />
									{
										errors.password && touched.password && (
											<div className='error-message'>
												{ errors.password }
											</div>
										)
									}
								</div>
								<div className='form-field'>
									<label htmlFor='confirmPassword' className='form-field__label'>Confirm password:</label>
									<Field id='confirmPassword' name='confirmPassword' className='form-field__input' type='password' placeholder='Confirm password' />
									{
										errors.confirmPassword && touched.confirmPassword && (
											<div className='error-message'>
												{ errors.confirmPassword }
											</div>
										)
									}
								</div>
								<div>
									<button className='btn btn-primary'>
										Sing In
									</button>
								</div>
								{ isSubmitting ? (<div className='loading'>Submitting...</div>) : null }
							</Form>
						)
					}
				}
			</Formik>
		</div>
	)
}

export default RegisterForm
