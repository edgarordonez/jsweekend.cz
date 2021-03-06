import gql from 'graphql-tag';

const SearchFlightsQuery = gql`
  query SearchFlights($from: String, $to: String, $date: Date, $ITEMS_PER_PAGE: Int) {
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
        locale: en_GB
      },
      first: $ITEMS_PER_PAGE
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
          },
          price {
            amount,
            currency
          }
        }
      }
    }
  }
`;

export default SearchFlightsQuery;
