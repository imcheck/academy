import React from 'react';
import styled from 'styled-components';

class Messages extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <Container>
        {messages.map(({ component }, index) => React.cloneElement(component, { key: index }))}
      </Container>
    )
  }
}

export default Messages;

const Container = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
`