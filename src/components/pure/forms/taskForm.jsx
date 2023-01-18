import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TaskForm = ({ add }) => {
	const nameRef = useRef('');
	const descriptionRef = useRef('');
	const levelRef = useRef(LEVELS.NORMAL);

	const addTask = (e) => {
		e.preventDefault();
		const task = new Task(
			1,
			nameRef.current.value,
			descriptionRef.current.value,
			false,
			levelRef.current.value
		);
		nameRef.current.value = '';
		descriptionRef.current.value = '';
		levelRef.current.value = LEVELS.NORMAL;
		add(task);
	};

	return (
		<form onSubmit={ addTask } className='mb-4'>
			<div className='row'>
				<label htmlFor='txtName' className='col-form-label text-left'>Name: </label>
				<input type='text' id='txtName' className='form-control' ref={ nameRef } placeholder='Task Name' required autoFocus/>
			</div>
			<div className='row'>
				<label htmlFor='txtDescription' className='col-form-label'>Description: </label>
				<textarea id='txtDescription' className='form-control' ref={ descriptionRef } placeholder='Description' required autoFocus>
				</textarea>
			</div>
			<div className='row'>
				<label htmlFor='ddlLevels' className='col-form-label'>Priotity: </label>
				<select id='ddlLevels' className='form-select' ref={ levelRef } defaultValue={ LEVELS.NORMAL } required autoFocus>
					{ Object.keys(LEVELS).map(key => (
						<option key={ key } value={ LEVELS[key] }>
							{ LEVELS[key] }
						</option>
					)) }
				</select>
			</div>
			<div className='row justify-content-center align-content-center'>
				<button type='submit' className='btn btn-outline-primary'>
					<span>Add Task</span> <FontAwesomeIcon icon='fa-add' />
				</button>
			</div>
		</form>
	);
};

TaskForm.propTypes = {
	add: PropTypes.func.isRequired,
};

export default TaskForm;
