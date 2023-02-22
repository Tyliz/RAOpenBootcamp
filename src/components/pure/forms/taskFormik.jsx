import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../../models/task.class'
import * as Yup from 'yup'
import { LEVELS } from '../../../models/levels.enum'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TaskFormik = ({add, length}) => {

	const initialValues = {
		name: '',
		description: '',
		level: '',
	}

	const formSchema = Yup.object().shape({
		name: Yup.string()
			.required('Please enter a name')
			.min(5, 'The name is too short'),
		description: Yup.string()
			.required('Please enter a description')
			.min(5, 'The description is too short'),
		level: Yup.string()
			.required('Please select a level')
			.oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'Select a valid level please'),
	})

	const submitTask = async (values) => {
		await new Promise(response => {
			setTimeout(response, 1000)
		})
		const task = new Task(
			1,
			values.name,
			values.description,
			false,
			values.level,
		)
		add(task)
	}

	return (
		<div>
			<fieldset className='fieldset'>
				<legend className='fieldset__legend'>
					{ length > 0 ? 'New Task' : 'Create your first task' }
				</legend>
				<Formik initialValues={ initialValues } onSubmit={ submitTask } validationSchema={ formSchema }>
					{
						({ isSubmitting }) => {
							return (
								<Form>
									<div className='form-field'>
										<label htmlFor='name' className='form-field__label'>Name:</label>
										<Field id='name' name='name' className='form-field__input' placeholder='Name'></Field>
										<ErrorMessage name='name' className='error-message' component='div'></ErrorMessage>
									</div>
									<div className='form-field'>
										<label htmlFor='description' className='form-field__label'>Description:</label>
										<Field id='description' name='description' className='form-field__input' placeholder='Description...' as='textarea'></Field>
										<ErrorMessage name='description' className='error-message' component='div'></ErrorMessage>
									</div>
									<div className='form-field'>
										<label htmlFor='level' className='form-field__label'>Level:</label>
										<Field id='level' name='level' className='form-field__input' as='select'>
											<option>-- Select a level --</option>
											{
												Object.keys(LEVELS).map(key => (
													<option key={ key } value={ LEVELS[key] }>
														{ LEVELS[key] }
													</option>
												))
											}
										</Field>
										<ErrorMessage name='level' className='error-message' component='div'></ErrorMessage>
									</div>
									<div>
										<button className='btn btn-success'>
											<span>{ length > 0 ? 'Add Task' : 'Create your first task'}</span> <FontAwesomeIcon icon='fa-add' />
										</button>
									</div>
									{ isSubmitting ? (
										<div className='loading'>
											<span className='loading__text'>Adding task...</span>
										</div>
									) : null }
								</Form>
							)
						}
					}
				</Formik>
			</fieldset>
		</div>
	)
}

TaskFormik.propTypes = {
	add: PropTypes.func.isRequired,
	length: PropTypes.number.isRequired,
}

export default TaskFormik
