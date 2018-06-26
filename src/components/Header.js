import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

class Header extends Component{
  render(){
    return(
      <header>
        <h1><FontAwesomeIcon icon={faCheckSquare} color='#933'/> TODO LIST</h1>
      <ul className='stat'>
        <li><span>{this.props.completeTaskNum}</span> complete</li>
        <li><span>{this.props.remainTaskNum}</span> remain</li>
        <li><span>{this.props.totalTaskNum}</span> total</li>
      </ul>
      </header>
    )
  }
}


export default Header;
