import React from 'react';
import { shallow } from 'enzyme';
import { Search } from './Search';

it('renders without crashing', () => {
  const data = {
    handleSubmit: (event) => event,
    client: null
  };
  const search = shallow(<Search handleSubmit={data.handleSubmit} client={data.client} />);

  expect(search).toMatchSnapshot();
});
