import React, { Component } from 'react';
import './App.css';
import Navigation from './Component/Navigation';

import Task2 from './Component/Task2';
import ToDoList from './Component/ToDoList/ToDoList';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ToDoList />
        <Task2 />
      </div>
    );
  }
}

export default App;
