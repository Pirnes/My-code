import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { legacy_createStore } from 'redux'
import { Provider } from 'react-redux'
import noteReducer from './reducers/noteReducer'

const store = legacy_createStore(noteReducer)

store.dispatch({
    type: 'NEW_NOTE',
    data: {
      content: 'the app state is in redux store',
      important: true,
      id: 1
    }
  })
  
  store.dispatch({
    type: 'NEW_NOTE',
    data: {
      content: 'state changes are made with actions',
      important: false,
      id: 2
    }
  })
  

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
)