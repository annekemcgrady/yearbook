import React from 'react';
import './Person.css';

const Person = ({ id, photo, name, quote, superlative } )=> {
  return (
    <div key={id} className="person-card">
      <img src={photo} alt='portrait'></img>
      <h3 className="name">{name}</h3>
      <p className="quote">{quote}</p>
      <p className="superlative">{superlative}</p>
    </div>
  )
}

export default Person;
