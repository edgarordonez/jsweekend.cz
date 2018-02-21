import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const SearchFlights = gql`
  query SearchFlights($from: String, $to: String, $date: Date) {
    allFlights(
      search: {
        from: {
          location: $from
        },
        to: {
          location: $to
        }, 
        date: {
          exact: $date
        }, 
        passengers: {
          adults: 2
        }
      }, 
      options: {
        currency: EUR, 
        locale: es_ES
      }
    ) {
      edges {
        node {
          id
          airlines {
            name
            code
            name
            logoUrl
          }
          departure {
            airport {
              locationId
              name
              slug
              city {
                name
              }
            }
            time
            localTime
          }
          arrival {
            airport {
              locationId
              name
              slug
              city {
                name
              }
            }
          }
        }
      }
    }
  }
`;

const Flights = ({data: { allFlights, loading, refetch }}) => {
  return (
    <Fragment>
      {
        loading ?
          <div>
            <p>Loading...</p>
          </div>
        :
          <div>
            {JSON.stringify(allFlights, null, 2)}
          </div>
      }
    </Fragment>
  );
}

export default graphql(SearchFlights, {
  options: ({ fields: { from , to, date } }) => ({ variables: { from, to, date }}),
})(Flights);
