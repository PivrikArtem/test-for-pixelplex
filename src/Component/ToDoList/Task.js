import React, { Component } from 'react';
import { removeTask } from './Services.js'
import img from './imgs/1.gif'
import './ToDoList.css';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.task.title

        }
        this.parentCallback = props.deleteCallback;
        this.parentloadingPage = props.loadingCallback;

    }


    deleteTask(e) {
        var task = { ...this.props.task };
        this.parentloadingPage(task);
        removeTask(task.id, 123)
            .then(data => {
                this.parentCallback(task.id);
                this.parentloadingPage(task);
            })
    }


    render() {


        var { title } = this.state;

        return (
            <div className={this.props.task.isDone ? 'task done' : 'task'}>
                <img src={img} className={this.props.task.isInProgress ? "img-task-blok" : "img-task"} />

                <span >{title}</span>

                <span className='delete' onClick={this.deleteTask.bind(this)}>x</span>
            </div>
        )
    }
}
export default Task;

