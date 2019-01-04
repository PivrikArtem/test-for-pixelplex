import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import './ToDoList.css';
import ToDoListTaskCreator from './ToDoListTaskCreator.js';
import TasksList from './TasksList.js';
import { getTasks } from './Services.js';
import { toDoListReducer } from './redux/toDoList-reducers.js';
import { putTasksAction } from './redux/toDolist-actions';
import { createNewTask } from './redux/toDolist-actions';
import { deleteTask } from './redux/toDolist-actions';
import { Grid, Row, Col } from 'react-bootstrap';

class ToDoList extends Component {
  constructor() {
    super();
       this.store = createStore(toDoListReducer);

    var state = this.store.getState();

    this.state = {
      ...state,
      classLoading: 'img-creat'
    };

    this.store.subscribe(() => {
      var state = this.store.getState();
      this.setState(state);
    })
    getTasks(123)
      .then(tasksFromServer => {

        var tasks = tasksFromServer.map(itemFromServer => {
          return {
            id: itemFromServer.id,
            title: itemFromServer.title,
            isDone: itemFromServer.done,
            isInProgress: false
          };
        });

        var action = putTasksAction(tasks);

        this.store.dispatch(action);
      })
  }


  createNewTask(task) {
    this.store.dispatch(createNewTask(task));
  }

  deleteTask(taskId) {
    this.store.dispatch(deleteTask(taskId));

  }
 
  loadingGif() {
    var classLoading = this.state.classLoading;

    if (classLoading === 'img-creat') { classLoading = 'img-creat-blok' } else { classLoading = 'img-creat' }
    this.setState({
      classLoading: classLoading
    })
  }
  loadingPage(task) {

    this.setState({
      tasks: this.state.tasks.map(t => {
        if (t.id === task.id) {
          return {
            ...t,
            isInProgress: !t.isInProgress
          }
        }
        else {
          return {
            ...t,
          }
        }
      })
    });
  }


  render() {
    var {classLoading,tasks } = this.state
    
    return (
      <div className='toDoList'>
       <Grid>
       <Row className="taskName">
       <h4>Task1</h4>
          </Row>
        
          <Row className="">
            <Col xs={12} sm={6} className="main-section">
            < ToDoListTaskCreator classLoading={classLoading} loading={this.loadingGif.bind(this)} onCreat={this.createNewTask.bind(this)} />
       
            </Col>
            <Col xs={12} sm={6} className="sidebar-section">
              
              <TasksList tasks={tasks} onDelete={this.deleteTask.bind(this)} onloading={this.loadingPage.bind(this)}  />
            </Col>
          </Row>
          
        </Grid>
        
      </div>
    );
  }
}

export default ToDoList;

