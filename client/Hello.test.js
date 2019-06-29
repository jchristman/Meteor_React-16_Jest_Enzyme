import React from 'react';
import { shallow, mount } from 'enzyme';
import Hello from './Hello.js';

describe('The <Hello/> component', () => {
  it('renders without errors', () => {
    expect(shallow(<Hello/>).exists()).toEqual(true);
  });

  it('renders one <button/> component', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('increments values when the button is clicked', () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('p').text()).toEqual('You\'ve pressed the button 0 times.');
    wrapper.find('button').simulate('click');
    expect(wrapper.find('p').text()).toEqual('You\'ve pressed the button 1 times.');
  });
});
