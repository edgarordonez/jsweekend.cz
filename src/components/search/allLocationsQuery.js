import gql from 'graphql-tag';

const AllLocationsQuery = gql`
  query allLocations($search: String) {
    allLocations(
      search: $search,
      options: {
        locale: en_GB,
        locationType: airport,
      }) {
      edges {
        node {
          name,
        }
      }
    }
  }
`

export default AllLocationsQuery;
