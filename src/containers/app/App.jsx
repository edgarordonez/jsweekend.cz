import React, { Component, Fragment } from 'react';
import autoBind from 'react-autobind';
import styled from 'styled-components';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Appbar from 'muicss/lib/react/appbar';
import { SearchWrapper, FlightsWrapper } from './../../components';

const Wrapper = styled.div`
  height: 100vh;

  Button {
    color: #FFFFFF;
    background-color: #54b8a5;
  }

  input:focus,
  select:focus,
  input:focus~label,
  select:focus~label,
  .mui-select:focus>select,
  .mui-select:focus>label {
    color: #54b8a5;
    border-color: #54b8a5;
  }

  .appbar {
    min-height: 64px;
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

  .main-content {
    min-height: calc(100vh - 100px - 64px);
    .form-content {
      margin: 5em 0;
  
      @media(max-width: 720px) {
        margin: 2em 0;
        
        form {
          width: 100%;
        }
      }
    }
  }

  footer {
    width: 100%;
    padding: 4rem;
    color: #FFFFFF;
    background-color: #54b8a5;
    text-align: center;

    a {
      text-decoration: none;
      color: #FFFFFF;
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchFields: null
    };

    autoBind(this);
  }

  handleSubmit(fields) {
    this.setState({ searchFields: fields });
  }

  render() {
    return (
      <Fragment>
        <Wrapper>
          <Appbar className="appbar mui--z1">
            <img src="https://www.kiwi.com/images/logos/kiwicom/navbar@2x.png?v=1" alt="kiwi.com" />
            <small>jsweekend.cz</small>
          </Appbar>
          <Container className="main-content">
            <Row>
              <Col md="12" className="form-content">
                <SearchWrapper handleSubmit={this.handleSubmit} />
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
          <footer>
            <a href="https://github.com/edgarordonez/jsweekend.cz">
              kiwi.com jsweekend.cz | Edgar Ordóñez Rodríguez
            </a>
          </footer>
        </Wrapper>
      </Fragment>
    );
  }
}

export default App;
