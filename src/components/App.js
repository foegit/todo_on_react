import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
    <div>
      <header>
        <h1>TODO LIST</h1>
      <ul class='stat'>
        <li><span>1</span> complete</li>
        <li><span>2</span> remain</li>
        <li><span>3</span> total</li>
      </ul>
      </header>
      <main>
      <div className="todo">
        <div className="list">
          <div className="todo-item notcomplete">
            <button>Check</button>
            <span class='todo-text'>Learn react</span>
            <button>Edit</button>
            <button>Del</button>
          </div>
          <div className="todo-item complete">
            <button>Check</button>
            <span class='todo-text'>Learn redux</span>
            <button>Edit</button>
            <button>Del</button>
          </div>
          <div className="todo-item notcomplete">
            <button>Check</button>
            <span class='todo-text'>Learn react-router</span>
            <button>Edit</button>
            <button>Del</button>
          </div>
        </div>
      </div>
      </main>
    </div>
  )
  }
}

export default App;
