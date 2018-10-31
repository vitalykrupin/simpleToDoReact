import React, { Component } from 'react';
import Form from './Form';
import List from './List';

class App extends Component {
  
  state = {
    inputValue: '',
    tasks: []
  };
  
  onInputChange = (evt) => {
    console.log(evt.target.value);
    this.setState({ inputValue: evt.target.value });
  };
  
  onFormSubmit = (evt) => {
    evt.preventDefault();
    const newTask = {
      value: this.state.inputValue,
      done: false
    };
    const tasks = this.state.tasks;
    tasks.push(newTask);
    this.setState({ tasks, inputValue: '' })
  };
  
  onButtonClick = (index) => {
    const tasks = this.state.tasks;
    tasks[index].done = !tasks[index].done;
    this.setState({ tasks });
  };
  
  render() {
    return (
      <div className='App'>
        <Form
          inputValue={this.state.inputValue}
          onInputChange={this.onInputChange}
          onFormSubmit={this.onFormSubmit}
        />
        <List
          tasks={this.state.tasks}
          onButtonClick={this.onButtonClick}
        />
      </div>
    );
  }
}

export default App;
