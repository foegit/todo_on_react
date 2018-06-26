import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './css/main.css'
import App from './components/App'

const innitialData = [
  {
    id: 1,
    title: 'Learn react',
    complete: false
  },
  {
    id: 2,
    title: 'Learn redux',
    complete: true
  },
  {
    id: 3,
    title: 'Learn redux-router',
    complete: true
  }
];

function todoreducer(state = innitialData, action ) {
  if(action.type === 'ADD_TODO_ITEM'){
    action.payload.id = Date.now();
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(todoreducer);

store.subscribe(()=>{
  console.log(store.getState());
});

store.dispatch({type: 'ADD_TODO_ITEM', payload: {title: "Learn puthon", completed: true}});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
