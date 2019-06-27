import React from 'react';
import { shallow, mount } from 'enzyme';
import Cohort from './Cohort.js';

describe('Cohort', () => {

 const fakeData = [{id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
  {id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'}]
  
  it('should match the snapshot when person data is passed in correctly', () => { 
    const wrapper = mount( 
    <Cohort 
      title="Staff"
      data = {fakeData} 
    />);

    expect(wrapper).toMatchSnapshot()
  })
})