import React, { Component, Fragment } from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import Container from 'muicss/lib/react/container';
import Appbar from 'muicss/lib/react/appbar';
import { Search, Flights } from './../../components';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://graphql.kiwi.com/' }),
  cache: new InMemoryCache(),
});

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
      <ApolloProvider client={client}>
        <Fragment>
          <Appbar></Appbar>
          <Container>
            <Search handleSubmit={this.handleSubmit} />
            { this.state.searchFields ? <Flights fields={this.state.searchFields} /> : <p>Search a flight on kiwi.com</p> }
          </Container>
        </Fragment>
      </ApolloProvider>
    );
  }
}

export default App;
