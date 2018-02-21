import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import SearchFlightsQuery from './searchFlightsQuery';

export const Flights = ({data: { allFlights, loading, refetch }}) => {
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

const FlightsWrapper = graphql(SearchFlightsQuery, {
  options: ({ fields: { from , to, date } }) => ({ variables: { from, to, date }}),
})(Flights);

export default FlightsWrapper;
