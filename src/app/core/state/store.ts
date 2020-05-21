import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';

const createAppStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
        : (f: any) => f,
    ),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default createAppStore;
