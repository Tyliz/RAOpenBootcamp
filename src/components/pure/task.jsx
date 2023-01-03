import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

import '../../styles/task.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task }) => {
    useEffect(() => {
        console.log('Created Task');
        return () => {
            console.log('Task');
        };
    }, [task]);

    /**
     * Funtion than returns a badge depends o level's task
     */
    function taskLevelBadge() {
        let badge = (<h6 className='mb-0'><span className='badge bg-primary'>{ task.level }</span></h6>);

        switch (task.level) {
            case LEVELS.NORMAL:
                badge =  (<h6 className='mb-0'><span className='badge bg-primary'>{ task.level }</span></h6>);
                break;
            case LEVELS.URGENT:
                badge =  (<h6 className='mb-0'><span className='badge bg-warning'>{ task.level }</span></h6>);
                break;
            case LEVELS.BLOCKING:
                badge = (<h6 className='mb-0'><span className='badge bg-danger'>{ task.level }</span></h6>);
                break;
            default:
                break;
        }

        return badge;
    }

    function taskCompletedIcon() {
        let icon = null;

        if (task.completed) {
            icon = (<FontAwesomeIcon icon='fa-regular fa-square-check' className='icono-completado'/>);
        } else {
            icon = (<FontAwesomeIcon icon='fa-regular fa-square' className='icono-pendiente'/>);
        }

        return icon;
    }

    return (
        <tr className='fw-normal task'>
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
                <FontAwesomeIcon icon="fa-solid fa-trash" className='icono-eliminar' />
            </td>
        </tr>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
