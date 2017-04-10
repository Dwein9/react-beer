import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers/index'
import App from './containers/app';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../style/style.css';
// import beer from '../data/beer';

// const beers = { beer };

// const store = createStore(rootReducer, beers);
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
