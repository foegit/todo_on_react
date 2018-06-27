import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';



import './css/style.css'


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

  if (todoreducer.nextId === undefined){
    todoreducer.nextId = innitialData.length + 1;
  }
  if(action.type === 'ADD_TASK'){
    return [...state, {
      id: todoreducer.nextId++,
      title: action.payload,
      complete: false
    }];
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
    return state.filter((task)=>
  {
    if(task.id !== action.taskId)
    {
      return task;
    }

  });
  }
  return state;
}

const store = createStore(todoreducer);
store.subscribe(()=>{
  console.log(store.getState());
});
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
