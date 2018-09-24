import React from 'react';
import ReactDOM from 'react-dom';

import Messages from './Messages';
import Message from './Message';

export class Notification {
  static isMount = false;
  static Container;
  static Messages = [];

  static open({ title, message, duration = 3 }) {
    if (!Notification.isMount) {
      const div = document.createElement('div');
      document.body.appendChild(div);
      Notification.isMount = true;
      Notification.Container = div;
    }
    Notification.Messages.push({
      component: <Message title={title} message={message} duration={duration}/>
    });
    ReactDOM.render(<Messages messages={Notification.Messages}/>, Notification.Container);
  }
}


// https://github.com/react-component/notification/blob/master/src/Notification.jsx