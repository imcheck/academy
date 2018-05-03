import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div `
  height: 100px;
  background-color: orange;
  color: yellow;
`
class App extends React.Component {
  render() {
    return <Container>Hello React Using styled-components</Container>;
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot) module.hot.accept();