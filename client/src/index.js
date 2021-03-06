import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-table/react-table.css';
import './css/customCss.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import Main from './components/Main';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
      <Main />
  </Provider>,
  document.querySelector('#root')
);
