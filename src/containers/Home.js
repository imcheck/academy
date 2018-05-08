import React from 'react';
import styled from 'styled-components';

import ErrorHOC from '@hoc';

const Container = styled.div`
  height: 30px;
  background-color: blue;
  color: white;
`;

class Home extends React.Component {
  render() {
    return <Container>Home</Container>;
  }
};
export default ErrorHOC(Home);