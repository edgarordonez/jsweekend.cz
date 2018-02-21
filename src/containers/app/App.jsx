import React, { Component, Fragment } from 'react';
import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';
import { Search, FlightsWrapper } from './../../components';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFields: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    this.setState({ searchFields: fields });
  }

  render() {
    return (
      <Fragment>
        <Appbar></Appbar>
        <Container>
          <Search handleSubmit={this.handleSubmit} />
          {this.state.searchFields ? <FlightsWrapper fields={this.state.searchFields} /> : <p>Search a flight on kiwi.com</p>}
        </Container>
      </Fragment>
    );
  }
}

export default App;
