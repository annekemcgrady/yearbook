import React, { Component } from 'react';
import './Form.css';

//yearbook add new student form

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: '',
      superlative: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name] : event.target.value })
  }

  submitNewStudent = (event) => {
    event.preventDefault()
    const newStudent = {...this.state, id: Date.now()};
    this.props.addNewStudent(newStudent)
    this.resetInputs()
  }

  resetInputs = () => {
    this.setState( {
      name: '',
      quote: '',
      superlative: ''
    })
  }

  render() {
    return (
    <form className='form'>
      <input 
        name='name' 
        type='text'
        placeholder='Enter name'
        value={this.state.name}
        onChange={this.handleChange}
        />
        <input 
        name='quote' 
        type='text'
        placeholder='Enter favorite quote'
        value={this.state.quote}
        onChange={this.handleChange}
        />
        <input 
        name='superlative' 
        type='text'
        placeholder='Enter favorite superlative'
        value={this.state.superlative}
        onChange={this.handleChange}
        /> 
        <button onClick={this.submitNewStudent}>Create Student</button>
    </form>
    )
  }
}

export default Form;