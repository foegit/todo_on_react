import React, { Component } from 'react';
import Header from './Header';
import TodoItem from './TodoItem';
import { connect } from 'react-redux';


class App extends Component{
  render(){

    return(
    <div>
      <Header />
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
