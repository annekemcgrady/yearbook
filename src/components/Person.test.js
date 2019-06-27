import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme'
import Person from './Person.js';

describe('Person', () => {
  it('should match the snapshot when person data is passed in correctly', () => { 
    const wrapper = shallow( 
    <Person 
      id={1}
      name="Jane"
      photo="https://placekitten.com/200/300"
      quote="too cool for school"
      superlative="most likely to be awesome"
    />);

    expect(wrapper).toMatchSnapshot()
  })
})