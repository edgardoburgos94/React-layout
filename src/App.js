import React, { Component } from 'react';
 import './App.css';

class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "David"]
    return (
      <div>
        <h1>Hola mundo</h1>
        <ul>
          {names.map(name =>
           <li>{name}</li>
         )}
        </ul>
      </div>


    );
  }
}

export default App;
