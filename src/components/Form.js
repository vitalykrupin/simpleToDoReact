import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
      <form
        className='form'
        onSubmit={(evt) => this.props.onFormSubmit(evt)}
      >
        <input
          type="text"
          value={this.props.inputValue}
          onChange={(evt) => this.props.onInputChange(evt)}
        />
      </form>
    )
  }
}

export default Form;
