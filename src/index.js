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
    completed: false
  },
  {
    id: 2,
    title: 'Learn redux',
    completed: true
  },
  {
    id: 3,
    title: 'Learn redux-router',
    completed: true
  }
];

function todoreducer(state = innitialData, action ) {

  if(action.type === 'ADD_TASK'){
    action.payload.id = Date.now();
    return [action.payload, ...state];
  }
  else if (action.type === 'TASK_STATUS_CHANGE'){
    return state.map((task) => {
        if(task.id === action.taskId){
          task.completed = !task.completed;
        }
        return task;
      });
  }
  else if (action.type === 'TASK_DELETE') {
    console.log('s');
  }
  return state;
}

const store = createStore(todoreducer);



store.dispatch({
  type: 'ADD_TASK',
  payload: {title: `Learn puthon Lorem ipsum dolor sit amet,
    consectetur adipisicing elit, sed do eiusmod tempor incididunt
     ut labore et dolore magna aliqua. Ut enim ad minim veniam,
     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.`,
  completed: true}
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
