import React, { PureComponent, Fragment } from 'react';
import Input from 'muicss/lib/react/input';

export default class Search extends PureComponent {
  render() {
    return (
      <Fragment>
        <Input
         type="text"
         label="From"
         placeholder="From"
         required
        />
        <Input
         type="text"
         label="To"
         placeholder="To"
         required
        />
        <Input
         type="date"
         label="Departure"
         required
        />
        <Input
         type="date"
         label="Return"
         required
        />
      </Fragment>
    );
  }
}
