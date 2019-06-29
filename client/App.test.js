import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App.js';
import Hello from './Hello.js';

describe('The <App/> component', () => {
  it('renders one <Hello/> component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(Hello)).toHaveLength(1);
  });
});
