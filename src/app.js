import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '@redux';

class App extends React.Component {
  render() {
    console.log(store.getState());
    return (
      <Provider store={store}>
        <div>hihi</div>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if(module.hot) module.hot.accept();