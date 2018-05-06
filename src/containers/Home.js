import React from 'react';
import styled from 'styled-components';

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
export default Home;