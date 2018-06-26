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
              <TodoItem key={task.id} title={task.title} completed={task.completed}/>
            );})}
        </div>
      </main>
    </div>
  );
  }
}
function mapStateToProps(state){
  console.log(state);
  return{
    todos: state
  }
}

export default connect(mapStateToProps)(App);
