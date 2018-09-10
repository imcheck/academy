import React from 'react';
import styled from 'styled-components';

import Message from './Message';

class _Notification extends React.PureComponent {
  state = {
    notifications: []
  }
  static open({ message, description, duration }) {
    this.setState((state) => {
      const _notis = [...state.notifications];
      _notis.push(<Message message={message} />);
      return { notifications: _notis }
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
class Notification {
  constructor(_notification) {
    this._notification = _notification;
  }
}
export const Notification = () => {
  const notification = new Notification();

  return notification;
}

const Container = styled.div``;
