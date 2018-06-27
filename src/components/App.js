import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import TodoItem from './TodoItem';
import AddTask from './AddTask'

class App extends Component{
  render(){
    const totalTask = this.props.todos.length;
    const completeTask = this.props.todos.filter(task=>task.completed).length;
    const remainTask = totalTask - completeTask;
    const { todos, onDeleteTask, onAddTask, onStatusChangeTask } = this.props;

    return(
    <div className='App'>
      <Header
        totalTaskNum={totalTask}
        completeTaskNum={completeTask}
        remainTaskNum={remainTask}/>
      <main>
        <div className="todo-container">
          {todos.map(task=>{
            return (
              <TodoItem
                id={task.id}
                key={task.id}
                title={task.title}
                completed={task.completed}
                onStatusChange={onStatusChangeTask}
                onDelete={onDeleteTask}/>
            );})}
            <div className="addPanel">
                <AddTask onAddTask={onAddTask}/>
          </div>
        </div>
      </main>
    </div>
  );
  }
}
function mapStateToProps(state){
  return{
    todos: state
  }
}

function mapDispatchToProps(dispatch){
  return{
    onStatusChangeTask: (id) => dispatch(
    {
      type: 'TASK_STATUS_CHANGE',
      taskId: id
    }),
    onDeleteTask: (id) => dispatch(
    {
      type: 'TASK_DELETE',
      taskId: id
    }),
    onAddTask: (text) => dispatch(
      {
        type: 'ADD_TASK',
        payload: text
      }
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
