import React from 'react';
import { shallow, mount } from 'enzyme';
import Hello from './Hello.js';
import useTracker from '/lib/useTracker.js';

jest.mock('/lib/useTracker.js');

describe('The <Hello/> component', () => {
  it('renders without errors', () => {
    useTracker.mockReturnValue([]);
    expect(shallow(<Hello/>).exists()).toEqual(true);
  });

  it('renders a Loading div when there are no counters in the database', () => {
    useTracker.mockReturnValue([]);

    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('div')).toHaveLength(1);
  });

  it('renders one <button/> component', () => {
    useTracker.mockReturnValue([ { value: 0 } ]);

    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('increments values when the button is clicked', () => {
    useTracker.mockReturnValue([ { value: 0 } ]);

    const wrapper = shallow(<Hello/>);
    expect(wrapper.find('p').text()).toEqual('You\'ve pressed the button 0 times.');

    wrapper.find('button').simulate('click');
    useTracker.mockReturnValue([ { value: 1 } ]);

    wrapper.setProps({}); // A janky workaround to force a rerender since our effect is mocked because meteor is hard
    expect(wrapper.find('p').text()).toEqual('You\'ve pressed the button 1 times.');
  });
});
