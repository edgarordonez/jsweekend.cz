import React from 'react';
import ReactDOM from 'react-dom';
import Flights from './Flights';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Flights />, div);
  ReactDOM.unmountComponentAtNode(div);
});
