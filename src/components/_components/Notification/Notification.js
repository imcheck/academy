import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Message from './Message';

export class Notification {
  static isMount = false;
  static open({message}) {
    console.log(message);
    if(!Notification.isMount) {
      // Notification Render
      // https://github.com/react-component/notification/blob/master/src/Notification.jsx
      const div = document.createElement('div');
      document.body.appendChild(div);
      Notification.isMount = true;
    }
  }
}

class _Notification extends React.Component {
  render() {
    return (
      <Container>
      </Container>
    )
  }
}
