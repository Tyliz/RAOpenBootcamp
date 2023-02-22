import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

import '../../styles/task.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LEVELS } from '../../models/levels.enum'

const TaskComponent = ({ task, complete, remove }) => {
	useEffect(() => {
		console.log('Created Task')
		return () => {
			console.log('Task')
		}
	}, [task])

	/**
	 * Funtion than returns a badge depends o level's task
	 */
	function taskLevelBadge() {
		let badge = null

		switch (task.level) {
			case LEVELS.NORMAL:
				badge = (<h6 className='mb-0'><span className='badge bg-primary'>{ task.level }</span></h6>)
				break
			case LEVELS.URGENT:
				badge = (<h6 className='mb-0'><span className='badge bg-warning'>{ task.level }</span></h6>)
				break
			case LEVELS.BLOCKING:
				badge = (<h6 className='mb-0'><span className='badge bg-danger'>{ task.level }</span></h6>)
				break
			default:
				badge = (<h6 className='mb-0'><span className='badge bg-primary'>{ task.level }</span></h6>)
				break
		}

		return badge
	}

	function taskCompletedIcon() {
		let icon = null

		if (task.completed) {
			icon = (<FontAwesomeIcon icon='fa-solid fa-toggle-on' onClick={ () => complete(task) } className='icono-completado'/>)
		} else {
			icon = (<FontAwesomeIcon icon='fa-solid fa-toggle-off' onClick={ () => complete(task)  } className='icono-pendiente'/>)
		}

		return icon
	}

	return (
		<tr className={ 'fw-normal task ' + (task.completed ? 'task-completed': 'task-pending') }>
			<th>
				<span className='ms-2 task__name'>{ task.name }</span>
			</th>
			<td className='aling-middle'>
				<span className='task__description'>{ task.description }</span>
			</td>
			<td>
				{ taskLevelBadge() }
			</td>
			<td className='aling-middle'>
				{ taskCompletedIcon() }
				<FontAwesomeIcon icon="fa-solid fa-trash" onClick={ () => remove(task) } className='icono-eliminar' />
			</td>
		</tr>
	)
}

TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task).isRequired,
	complete: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
}

export default TaskComponent
