import React, { Component } from 'react';
import Task from './Task.js';

class TasksList extends Component {

    render() {
        return (

            <div className='tasks'>
                <h4>List:</h4>
                {this.props.tasks.map((task) => {
                    return <Task task={task} deleteCallback={this.props.onDelete}
                        loadingCallback={this.props.onloading} key={task.id} />
                })
                }
            </div>

        );
    }
}

export default TasksList;

