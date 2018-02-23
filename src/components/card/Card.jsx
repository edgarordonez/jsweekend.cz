import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  .card {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 0;

    .airline-group {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .airline {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: .7rem;
  
        img {
          margin: .7rem;
        }
      }
    }

    .flight-detail {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: .7rem;
      small {
        display: block;
      }
    }
  }
`;

export const Card = ({ node }) => (
  <Wrapper>
    <div key={node.id} className="card mui--divider-bottom mui--z3">
      <div className="airline-group">
        {
          node.airlines.map((airline, index) => (
            <div key={`airline-${node.id}-${index}`} className="airline">
              <img src={airline.logoUrl} alt={airline.name} />
              <small>{airline.name}</small>
            </div>
          ))
        }
      </div>
      <div className="flight-detail">
        <p>
          {node.departure.airport.city.name} &#8594; {node.arrival.airport.city.name}
          <small>{new Date(node.departure.localTime).toString().split("GMT")[0]}</small>
        </p>
        <h2>
          {node.price.amount.toLocaleString('es-ES', {style: 'currency', currency: 'EUR'})}
        </h2>
      </div>
    </div>
  </Wrapper>
);

Card.propTypes = {
  node: PropTypes.object,
};

export default Card;
