import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import autoBind from 'react-autobind';
import { withApollo } from 'react-apollo';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Option from 'muicss/lib/react/option';
import Select from 'muicss/lib/react/select';
import Button from 'muicss/lib/react/button';
import AllLocationsQuery from './allLocationsQuery';

export class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      from: [],
      to: [],
      showSelectFrom: false,
      showSelectTo: false,
    }

    autoBind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const fields = {
      from: this.from.controlEl.value,
      to: this.to.controlEl.value,
      date: this.date.controlEl.value,
    };

    this.props.handleSubmit(fields);
  }

  async handleInputFrom() {
    try {
      const response = await this.props.client.query({
        query: AllLocationsQuery,
        options: {
          errorPolicy: 'ignore'
        },
        variables: { search: this.from.controlEl.value }
      });
  
      if (this.from.controlEl.value === '') {
        this.setState({
          from: [],
          showSelectFrom: false
        });
      } else {
        this.setState({
          from: response.data.allLocations.edges,
          showSelectFrom: true
        });
      }
    } catch (error) {
      console.error('no data found :(');
    }
  }

  async handleInputTo() {
    try {
      const response = await this.props.client.query({
        query: AllLocationsQuery,
        options: {
          errorPolicy: 'ignore'
        },
        variables: { search: this.to.controlEl.value }
      });
  
      if (this.to.controlEl.value === '') {
        this.setState({
          to: [],
          showSelectTo: false
        });
      } else {
        this.setState({
          to: response.data.allLocations.edges,
          showSelectTo: true
        });
      }
    } catch (error) {
      console.error('no data found :(');
    }
  }

  handleSelectFrom() {
    this.from.controlEl.value = this.selectFrom.controlEl.value;
    this.setState({ showSelectFrom: false });
  }

  handleSelectTo() {
    this.to.controlEl.value = this.selectTo.controlEl.value;
    this.setState({ showSelectTo: false });
  }

  render() {
    return (
      <Fragment>
        <Row>
          <Col md="12">
            <Form onSubmit={this.handleSubmit}>
              <legend>Flight search</legend>
              <Row>
                <Col md="3">
                  <Input
                    type="text"
                    label="From"
                    placeholder="From"
                    required
                    ref={(input) => this.from = input}
                    onInput={this.handleInputFrom}
                  />
                  {
                    (this.state.showSelectFrom && this.state.from.length > 0) ?
                      (
                        <Select label="From" defaultValue="default" onChange={this.handleSelectFrom} ref={(input) => this.selectFrom = input}>
                          <Option disabled value="default" label="Select departure" />
                          {
                            this.state.from.map(({ node }, index) => (
                              <Option key={`option-from-${node.name}-${index}`} value={node.name} label={node.name} />
                            ))
                          }
                        </Select>
                      )
                      : null
                  }
                </Col>
                <Col md="3">
                  <Input
                    type="text"
                    label="To"
                    placeholder="To"
                    required
                    ref={(input) => this.to = input}
                    onInput={this.handleInputTo}
                  />
                  {
                    (this.state.showSelectTo && this.state.to.length > 0) ?
                      (
                        <Select label="To" defaultValue="default" onChange={this.handleSelectTo} ref={(input) => this.selectTo = input}>
                          <Option disabled value="default" label="Select destination" />
                          {
                            this.state.to.map(({ node }, index) => (
                              <Option key={`option-to-${node.name}-${index}`} value={node.name} label={node.name} />
                            ))
                          }
                        </Select>
                      )
                      : null
                  }
                </Col>
                <Col md="3">
                  <Input
                    type="date"
                    label="Date"
                    required
                    ref={(input) => this.date = input}
                  />
                </Col>
                <Col md="3">
                  <Button variant="raised">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

Search.propTypes = {
  handleSubmit: PropTypes.func,
  client: PropTypes.any,
};

const SearchWrapper = withApollo(Search)
export default SearchWrapper;
