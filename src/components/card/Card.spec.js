import React from 'react';
import { shallow } from 'enzyme';
import { Card } from './Card';

it('renders without crashing', () => {
  const data = {
    node: {
      id: 1,
      airlines: [
        {
          id: 1,
          name: 'Card test flight',
          logoUrl: ''
        }
      ],
      departure: {
        localTime: 'Thu Feb 22 2018 16:26:58 GMT+0100 (CET)',
        airport: {
          city: {
            name: 'BCN'
          }
        }
      },
      arrival: {
        airport: {
          city: {
            name: 'BRNO'
          }
        }
      },
      price: {
        amount: 0
      }
    }
  }
  const card = shallow(<Card node={data.node} />);
  expect(card).toMatchSnapshot();
});
