import React, { Component } from 'react';
import Container from 'muicss/lib/react/container';
import styled from 'styled-components';
import Appbar from 'muicss/lib/react/appbar';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { Search, FlightsWrapper } from './../../components';

const Wrapper = styled.div`
  Button {
    color: #ffffff;
    background-color: #54b8a5;
  }

  input:focus,
  input:focus~label {
    color: #54b8a5;
    border-color: #54b8a5;
  }

  .appbar {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #000000;
    background-color: #FFFFFF;

    img {
      width: auto;
      height: 40px;
      margin: 10px;
    }
  }

  .form-content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5em 0;

    @media(max-width: 720px) {
      margin: 2em 0;
      
      form {
        width: 100%;
      }
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFields: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    this.setState({ searchFields: fields });
  }

  render() {
    return (
      <Wrapper>
        <Appbar className="appbar mui--z1">
          <img src="https://www.kiwi.com/images/logos/kiwicom/navbar@2x.png?v=1" alt="kiwi.com" />
          <small>jsweekend.cz</small>
        </Appbar>
        <Container>
          <Row>
            <Col md="12" className="form-content">
              <Search handleSubmit={this.handleSubmit} />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              {
                this.state.searchFields ? (
                  <FlightsWrapper fields={this.state.searchFields} />
                ) : null
              }
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default App;
