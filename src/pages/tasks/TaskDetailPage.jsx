import React from 'react'
import { useParams } from 'react-router-dom'

const TaskDetailPage = () => {
	const { idTask } = useParams()

	return (
		<div>
			<h1>Task Detail - { idTask }</h1>
		</div>
	)
}

export default TaskDetailPage
