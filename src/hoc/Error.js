import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  background-color: red;
  color: white;
  font-size: 5em;
`

class Error extends Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}

export default Error;