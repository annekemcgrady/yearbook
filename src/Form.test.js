import React from 'react';
import { shallow, mount } from 'enzyme';
import Form from './components/Form.js';

describe('Form', ()=> {
  it('should match the snapshot', ()=> {
    const mockMethod = jest.fn()
    const wrapper = mount(
      <Form 
        addNewStudent={mockMethod}
      />);

      expect(wrapper).toMatchSnapshot();
  })

  it('should match the snapshot', ()=> {
    const mockMethod = jest.fn()
    const wrapper = mount(
      <Form 
        addNewStudent={mockMethod}
      />);

    wrapper.find('.new-submit').simulate('click');
    expect(mockMethod).toBeCalled(); 
    })
})

