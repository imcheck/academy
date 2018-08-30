import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { store } from '@redux';
import HomeLayout from '@layouts/HomeLayout';
import LoginLayout from '@layouts/LoginLayout';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomeLayout} />
            <Route path="/login" component={LoginLayout}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot) module.hot.accept();