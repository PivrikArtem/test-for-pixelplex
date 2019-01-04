import React, { Component } from 'react';
import createTask from './Services.js'
import img from './imgs/1.gif'
import './ToDoList.css';
import { Image, Button } from 'react-bootstrap';

class ToDoListTaskCreator extends Component {

    createNewTaskForPress(e) {

        if (e.key === 'Enter' && e.currentTarget.value !== '') {

            this.props.loading();
            const newTaskInput = e.currentTarget;


            createTask(newTaskInput.value, 123)
                .then(data => {

                    const NewTask = {
                        title: data.task.title,
                        id: data.task.id,
                        isDone: data.task.done
                    }
                    this.props.onCreat(NewTask);
                    newTaskInput.value = '';
                    this.props.loading();
                })
        }
    }
    createNewTaskForClick() {
        {
            const newTaskInput = document.querySelector('input');
            if(newTaskInput.value!==''){
                this.props.loading();

                createTask(newTaskInput.value, 123)
                    .then(data => {
    
                        const NewTask = {
                            title: data.task.title,
                            id: data.task.id,
                            isDone: data.task.done
                        }
                        this.props.onCreat(NewTask);
                        newTaskInput.value = '';
                        this.props.loading();
                    })
            }

           
        }
    }
    render() {
        return (
            <div className='header'>
                <Image src={img} className={this.props.classLoading} />
                <input className='bs-search-bar form-control' onKeyPress={this.createNewTaskForPress.bind(this)} placeholder='Enter text, please' />
                <Button bsStyle="info" onClick={this.createNewTaskForClick.bind(this)} >Add text</Button>

            </div>
        );
    }
}

export default ToDoListTaskCreator;

