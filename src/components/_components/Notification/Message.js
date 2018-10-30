import React from 'react';
import styled, { keyframes } from 'styled-components';

class Message extends React.PureComponent {
  state = {
    visible: true
  }

  render() {
    if (this.state.visible) {
      return (
        <Container>
          <Title>{this.props.title}</Title>
          <Content>{this.props.message}</Content>
        </Container>
      )
    } else {
      return null;
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState(state => ({ visible: false }));
    }, this.props.duration * 1000);
  }
}

export default Message;

const Title = styled.div`
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid black;
  padding: 0px 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;

`

const appear = keyframes`
  from {
    right: -250px;
  }
  to {
    right: 0px;
  }
`

const Container = styled.div`
  position: relative;
  width: 250px;
  margin-bottom: 20px;
  background-color: white;
  box-shadow: 5px 5px 5px lightgray;
  border: 1px solid black;
  color: black;
  animation-name: ${appear};
  animation-duration: 1s;
`

const Content = styled.div`
  padding: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
`
