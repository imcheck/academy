import { createStore, applyMiddleware, compose} from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';


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
export const history = createBrowserHistory();
const middleware = routerMiddleware(history);
middlewares.push(middleware);

export const store = createStore(
  connectRouter(history)(reducers),
  compose(
    applyMiddleware(...middlewares)
  )
);
sagaMiddleware.run(sagas);