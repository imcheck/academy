import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import store from '@redux';
import Home from '@containers/Home';
import Login from '@containers/Login';

class App extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login}/>
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot) module.hot.accept();