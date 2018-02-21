import React, { Fragment } from 'react';
import { graphql } from 'react-apollo';
import SearchFlightsQuery from './searchFlightsQuery';
import Card from './../card/Card'

export const Flights = ({data: { allFlights, loading, refetch }}) => {
  return (
    <Fragment>
      {
        loading ?
          <div>
            <p>Loading...</p>
          </div>
        :
          allFlights.edges.map(({ node }) => (
            <Card key={`card${node.id}`} node={node} />
          ))
      }
    </Fragment>
  );
}

const FlightsWrapper = graphql(SearchFlightsQuery, {
  options: ({ fields: { from , to, date } }) => ({ variables: { from, to, date }}),
})(Flights);

export default FlightsWrapper;
