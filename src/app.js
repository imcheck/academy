import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "styled-components";


import { store, history } from "@redux";
import { theme } from "@config/styleConfig";

import Home from "@layouts/Home";
import Login from "@layouts/Login";
import Dev from "@layouts/Dev";

// CommonLayout 을 사용하는 컴포넌트들
import Student from "@containers/Student";
import Lecture from "@containers/Lecture";
import Teacher from "@containers/Teacher";
import PageLoad from "@containers/PageLoad";


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" render={() => <PageLoad><Home /></PageLoad>} />
              <Route path="/student" render={() => <PageLoad><Student /></PageLoad>} />
              <Route path="/lecture" render={() => <PageLoad><Lecture /></PageLoad>} />
              <Route path="/teacher" render={() => <PageLoad><Teacher /></PageLoad>} />
              <Route path="/login" component={Login} />
              <Route path="/components" component={Dev} />
              <Route render={() => <div>No Match</div>}/>
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </Provider>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));

if (module.hot) module.hot.accept();
