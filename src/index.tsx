import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import createAppStore from '../src/app/core/state';

import * as serviceWorker from './serviceWorker';

import RootRouter from './app/views/RootRouter';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

const store = createAppStore();

ReactDOM.render(
  <Provider store={store}>
    {/* Root Router */}
    <RootRouter />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
