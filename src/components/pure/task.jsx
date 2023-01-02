import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/app.scss';
import '../../styles/task.scss';


const TaskComponent = ({ task }) => {
    return (
        <div className='task'>
            <h2 className='task__name'>
                Name: { task.name }
            </h2>
            <h3>
                Description: { task.description }
            </h3>
            <h4>
                Level: { task.level }
            </h4>
            <h5>
                This task is: { task.completed ? 'COMPLETED': 'PENDING' }
            </h5>
        </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
