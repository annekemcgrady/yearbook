import React from 'react';
import './Person.css';

const Person = props => {
  console.log(props.id)
  return (
    <div key={props.id} className="person-card">
      <img src={props.photo} alt=''></img>
      <h3 className="name">{props.name}</h3>
      <p className="quote">{props.quote}</p>
      <p className="superlative">{props.superlative}</p>
    </div>
  )
}

export default Person;
