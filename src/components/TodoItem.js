import React, {Component} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faTrash } from '@fortawesome/free-solid-svg-icons'

class TodoItem extends Component{

  render(){
    const {onStatusChange, onDelete, id} = this.props;

    return(
        <div className={`todo-item ${this.props.completed?'completed':'notcomplete'}`}>
          <button onClick={()=>{onStatusChange(id)}}>
              <FontAwesomeIcon icon={this.props.completed?faCheckSquare:faSquare} color='#222' width='20px'/>
          </button>
          <span className='todo-text'>{this.props.title}</span>
          <button>Edit</button>
          <button onClick={()=>{onDelete(id)}}> <FontAwesomeIcon icon={faTrash} color='#933'/></button>
        </div>
    );
  }
}


export default TodoItem;
