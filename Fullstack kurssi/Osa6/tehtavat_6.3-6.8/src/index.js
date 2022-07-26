import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import anecdoteReducer from './reducers/anecdoteReducer'

const store = legacy_createStore(anecdoteReducer)

ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
)