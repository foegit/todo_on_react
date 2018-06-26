import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends Component{
  render(){
    return(
        <div className= {`todo-item ${this.props.completed?'completed':'notcomplete'}`}>
          <span><FontAwesomeIcon icon={faSquare}/></span>
          <span className='todo-text'>{this.props.title}</span>
          <button>Edit</button>
          <button>Del</button>
        </div>
    );
  }
}

export default TodoItem;
