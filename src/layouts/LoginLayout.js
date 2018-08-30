import React from 'react';
import styled from 'styled-components';

import ErrorHOC from '@hoc';

const Container = styled.div`
  height: 30px;
  background-color: orange;
  color: white;
`;

class Login extends React.Component {
  render() {
    return (
      <Container>Login</Container>
    )
  }
}

export default ErrorHOC(Login);