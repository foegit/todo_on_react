import React, { Component } from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';


class App extends Component{
  render(){

    const totalTask = this.props.todos.length;
    const completeTask = this.props.todos.filter(task=>task.completed).length;
    const remainTask = totalTask - completeTask;
    return(
    <div className='App'>
      <Header
        totalTaskNum={totalTask}
        completeTaskNum={completeTask}
        remainTaskNum={remainTask}/>
      <main>
        <div className="todo-list">
          {this.props.todos.map(task=>{
            return (
              <TodoItem
                id={task.id}
                key={task.id}
                title={task.title}
                completed={task.completed}
                onStatusChange={this.props.statusChange}
                onDelete={this.props.delete}/>
            );})}
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

    statusChange: (id) => dispatch({
      type: 'TASK_STATUS_CHANGE',
      taskId: id
    }),
    delete: (id) => dispatch({
      type: 'TASK_DELETE',
      taskId: id
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
