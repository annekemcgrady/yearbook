import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ title, data }) => {
  const peopleCards = data.map(person => {
    return <Person  key= {person.id} id={person.id} photo={person.photo || 'https://placekitten.com/200/300'} name={person.name} quote={person.quote} superlative={person.superlative} />;
  });
  return (
    <div>
      <h2>{title}</h2>
      <div className="card-area">
      {peopleCards}
      </div>
    </div>
  )
}

export default Cohort;
