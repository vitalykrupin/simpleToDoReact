import React, { Component } from 'react';

class Task extends Component {
  
  render() {
    return (
      <li className='task'>
        <span style={{ textDecoration: this.props.task.done ? 'line-through' : 'none'}}>
          {this.props.task.value}
        </span>
        <button
          onClick={() => this.props.onButtonClick(this.props.index)}
        >{this.props.task.done
                  ? 'Undo'
                  : 'Complete'}
        </button>
      </li>
    )
  }
}

export default Task;
