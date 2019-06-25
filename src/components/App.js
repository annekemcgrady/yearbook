import React, { Component } from 'react';
import Cohort from './Cohort';
import Form from './Form';
import people from '../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addNewStudent = student => {
    this.setState({students: [...this.state.students, student] });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
      <Cohort title= "Staff" data={this.state.staff} />
      <Cohort title="Students" data={this.state.students } />
      <Form className='form' addNewStudent={this.addNewStudent} />
      </div>
    );
  }
}


export default App;
