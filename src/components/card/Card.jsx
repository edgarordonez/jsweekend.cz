import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ node }) => (
  <div key={node.id} className="mui--divider-bottom">
    {
      node.airlines.map((airline, index) => (
        <div key={`airline-${node.id}-${index}`}>
          <img src={airline.logoUrl} alt={airline.name} />
          { airline.name }
        </div>
      ))
    }
  </div>
);

Card.propTypes = {
  node: PropTypes.object,
};

export default Card;
