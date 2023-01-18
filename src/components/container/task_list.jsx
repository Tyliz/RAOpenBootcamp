import React, { useState } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';

const TaskListComponent = () => {
	const defaultTask1 = new Task(
		1,
		'Example 1',
		'Default descripton 1',
		true,
		LEVELS.NORMAL
	);

	const defaultTask2 = new Task(
		2,
		'Example 2',
		'Default descripton 2',
		false,
		LEVELS.URGENT
	);

	const defaultTask3 = new Task(
		3,
		'Example 3',
		'Default descripton 3',
		false,
		LEVELS.BLOCKING
	);

	const [lstTask, setLstTask] = useState([defaultTask1, defaultTask2, defaultTask3]);

	const completeTask = (task) => {
		const index = lstTask.indexOf(task);
		const tmpLstTask = [...lstTask];

		tmpLstTask[index].completed = !tmpLstTask[index].completed;

		// We update the state of the componente and it will update the
		// Iteration of tje tasks in order to show the task update
		setLstTask(tmpLstTask);
	};

	const removeTask = (task) => {
		const index = lstTask.indexOf(task);
		const tmpLstTask = [...lstTask];
		tmpLstTask.splice(index, 1);
		setLstTask(tmpLstTask);
	};

	const addTask = (task) => {
		const tmpLstTask = [...lstTask, task];
		setLstTask(tmpLstTask);
	};

	return (
		<div>
			<div className='col-12'>
				<div className='card'>
					{/* Title */}
					<div className='card-header p-3'>
						<h5>
							Your Tasks:
						</h5>
					</div>

					<div className='card-body tasklist__body' data-mdb-perfect-scrollbar='true' >
						<table>
							<thead>
								<tr>
									<th scope='col'>Title</th>
									<th scope='col'>Description</th>
									<th scope='col'>Priority</th>
									<th scope='col'>Actions</th>
								</tr>
							</thead>
							<tbody>
								{ lstTask.map((task, index) => {
									return (<TaskComponent key={ index } task={ task } complete={ completeTask } remove={ removeTask } ></TaskComponent>);
								}) }
							</tbody>
						</table>
					</div>
				</div>
				<TaskForm add={ addTask }></TaskForm>
			</div>
		</div>
	);
};

export default TaskListComponent;
