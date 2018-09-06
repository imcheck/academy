import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { store } from '@redux';
import { theme } from '@config/styleConfig';
import HomeLayout from '@layouts/HomeLayout';
import LoginLayout from '@layouts/LoginLayout';
import DevLayout from '@layouts/DevLayout';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={HomeLayout} />
              <Route path="/login" component={LoginLayout} />
              <Route path="/components" component={DevLayout} />
            </Switch>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) module.hot.accept();
