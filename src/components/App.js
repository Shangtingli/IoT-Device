import React, { Component } from 'react';
import {Door} from './Door';
import {Shards} from './Shards';
import {Bulb} from './Bulb';
import '../styles/App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
            <Shards/>
            <Door/>
            <Bulb/>
      </div>
    );
  }
}

export default App;
