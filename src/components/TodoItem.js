import React, {Component} from 'react';

class TodoItem extends Component{
  render(){
    return(
        <div className= {`todo-item ${this.props.completed?'completed':'notcomplete'}`}>
          <button>Check</button>
          <span className='todo-text'>{this.props.title}</span>
          <button>Edit</button>
          <button>Del</button>
        </div>
    );
  }
}

export default TodoItem;
