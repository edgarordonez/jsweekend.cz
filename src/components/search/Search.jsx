import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';

export default class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fields = {
      from: this.from.value,
      to: this.to.value,
      date: this.date.value,
    };

    this.props.handleSubmit(fields);
  }

  render() {
    return (
      <Fragment>
        <Form
          inline
          onSubmit={this.handleSubmit}
        >
          <legend>Flight search</legend>
          <Input
            type="text"
            label="From"
            placeholder="From"
            required
            ref={({ controlEl }) => this.from = controlEl}
          />
          <Input
            type="text"
            label="To"
            placeholder="To"
            required
            ref={({ controlEl }) => this.to = controlEl}
          />
          <Input
            type="date"
            label="Date"
            required
            ref={({ controlEl }) => this.date = controlEl}
          />
          <Button variant="raised">Submit</Button>
        </Form>
      </Fragment>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
};
