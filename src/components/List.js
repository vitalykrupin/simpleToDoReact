import React, { Component } from 'react';
import Task from './Task';

class List extends Component {
  
  render() {
    return (
      <ul className='list'>
        {this.props.tasks.map((task, index) => {
          return (
            <Task
              onButtonClick={this.props.onButtonClick}
              key={index}
              task={task}
              index={index}
            />
          )
        })}
      </ul>
    )
  }
}

export default List;
