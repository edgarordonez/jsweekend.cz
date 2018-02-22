import React from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import SearchFlightsQuery from './searchFlightsQuery';
import Card from './../card/Card';

const ITEMS_PER_PAGE = 5;
const Wrapper = styled.div`
  .load-more-content {
    margin: 2em 0;
    text-align: center;

    Button {
      color: #ffffff;
      background-color: #54b8a5;
    }
  }
`;

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

export const Flights = ({ allFlights, loading, loadMoreFlights }) => {
  return (
    <Wrapper>
      {loading ? (
        <Spinner>
          <img src="/spinner.jpg" alt="" />
        </Spinner>
      ) : (
        <Row>
          {allFlights.edges.map(({ node }) => (
            <Col key={`col-card-${node.id}`} md="12">
              <Card key={`card-${node.id}`} node={node} />
            </Col>
          ))}
          <Col md="12" className="load-more-content">
            <Button
              variant="raised"
              onClick={loadMoreFlights}
              style={{ backgroundColor: '#54B8A5' }}
            >
              Load more
            </Button>
          </Col>
        </Row>
      )}
    </Wrapper>
  );
};

const FlightsWrapper = graphql(SearchFlightsQuery, {
  options: ({ fields: { from, to, date } }) => ({
    variables: { from, to, date, ITEMS_PER_PAGE }
  }),
  props({ data: { allFlights, loading, fetchMore } }) {
    return {
      allFlights,
      loading,
      loadMoreFlights() {
        return fetchMore({
          variables: {
            ITEMS_PER_PAGE: allFlights.edges.length + ITEMS_PER_PAGE
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return Object.assign({}, previousResult, {
              allFlights: {
                ...previousResult.allFlights,
                ...fetchMoreResult.allFlights
              }
            });
          }
        });
      }
    };
  }
})(Flights);

export default FlightsWrapper;
