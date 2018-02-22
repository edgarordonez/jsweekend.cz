import React from 'react';
import { shallow } from 'enzyme';
import { Flights } from './Flights';

it('renders without crashing', () => {
  const data = {
    allFlights: {
      edges: [
        {
          "node": {
            "id": "RmxpZ2h0OjMzNDEwNjkwMw==",
            "airlines": [
              {
                "name": "Vueling",
                "code": "VY",
                "logoUrl": "https://images.kiwi.com/airlines/64/VY.png"
              }
            ],
            "departure": {
              "airport": {
                "locationId": "BCN",
                "name": "Aeropuerto de Barcelona-El Prat",
                "slug": "aeropuerto-de-barcelona-el-prat-barcelona-espana",
                "city": {
                  "name": "Barcelona"
                }
              },
              "time": "2018-02-23T17:10:00.000Z",
              "localTime": "2018-02-23T18:10:00.000Z"
            },
            "arrival": {
              "airport": {
                "locationId": "LTN",
                "name": "Aeropuerto de Londres-Luton",
                "slug": "aeropuerto-de-londres-luton-londres-reino-unido",
                "city": {
                  "name": "Londres"
                }
              }
            }
          }
        }
      ]
    },
    loading: true,
    loadMoreFlights: (event) => event
  }

  const flights = shallow(<Flights allFlights={data.allFlights} loading={data.loading} loadMoreFlights={data.loadMoreFlights} />);

  expect(flights).toMatchSnapshot();
});
