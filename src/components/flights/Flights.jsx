import React, { Fragment } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
import SearchFlightsQuery from './searchFlightsQuery';
import Card from './../card/Card'

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5em;

  img {
    width: auto;
    height: 100px;
    animation: spinner 2s infinite;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(50deg);
    }
    100% {
      transform: rotate(100deg);
    }
  }
`;

export const Flights = ({data: { allFlights, loading, refetch }}) => {
  return (
    <Fragment>
      {
        loading ?
          <Spinner>
            <img src="/spinner.jpg" alt=""/>
          </Spinner>
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
