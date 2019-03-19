import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import City from './Components/City/City';

class App extends Component {


  render() {
    return (
      <div className="App">
        <City />
      </div>
    );
  }
}

export default App;
