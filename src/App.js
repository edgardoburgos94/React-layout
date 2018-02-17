import React, { Component } from 'react';
 import './App.css';
 import Welcome2 from './Title.js';

const Welcome = () => <h1>Hola mundo desde componente</h1>;
class App extends Component {
  render() {
    const names = ["Pedro", "Juan", "David"]
    return (
      <div>
        <Welcome />
        {names.map(name => <Welcome2 name={name}/>)}
      </div>

    );
  }
}

export default App;
