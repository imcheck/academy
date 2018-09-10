import React from 'react';
import styled from 'styled-components';

import Message from './Message';

export class Notification extends React.PureComponent {
  state = {
    notifications: []
  }
  static open({ message, description, duration }) {
    this.setState((state) => {
      const _notis = [...state.notifications];
      _notis.push(<Message message={message} />);
      return { notifications: _notis}
    })
  }
  render() {
    return (
      <Container>
        {this.state.notifications}
      </Container>
    )
  }
}

const Container = styled.div``;
