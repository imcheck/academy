import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components';


import { store } from '@redux';
import { theme } from '@config/styleConfig';
import { history } from './redux';

import HomeLayout from '@layouts/HomeLayout';
import Student from '@containers/Student';
import Class from '@containers/Class';
import LoginLayout from '@layouts/LoginLayout';
import DevLayout from '@layouts/DevLayout';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={HomeLayout} />
              <Route path="/student" component={Student} />
              <Route path="/class" component={Class} />
              <Route path="/login" component={LoginLayout} />
              <Route path="/components" component={DevLayout} />
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) module.hot.accept();
