import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';

it('renders without crashing', () => {
  const handleSubmit = (event) => event;
  const search = shallow(<Search handleSubmit={handleSubmit} />);

  expect(search).toMatchSnapshot();
});
