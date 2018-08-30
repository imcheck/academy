import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';

import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: (getState, action) => true
  });
  middlewares.push(logger);
}
export const history = createHistory();
const middleware = routerMiddleware(history);
middlewares.push(middleware);

export const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(sagas);