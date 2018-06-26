import React, { Component } from 'react'

class Header extends Component{
  render(){
    return(
      <header>
        <h1>TODO LIST</h1>
      <ul className='stat'>
        <li><span>1</span> complete</li>
        <li><span>2</span> remain</li>
        <li><span>3</span> total</li>
      </ul>
      </header>
    )
  }
}

export default Header;
