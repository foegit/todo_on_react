import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

class AddTask extends Component{
  render(){
    const { onAddTask } = this.props;
    return(
      <div className="addTaskPanel">
        <textarea className='addTaskArea' type="text" ref={this.textarea}/>
        <button
          className='addTaskBtn'
          onClick={()=>{
            let area = document.querySelectorAll('.addTaskArea')[0];
            let text = area.value;
            if(text.length!==0)
            {

              area.value = '';

              return onAddTask(text);
            }

          }}>

          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></button>
      </div>
    );
  }
}

export default AddTask;
