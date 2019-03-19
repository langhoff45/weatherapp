import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';

import City from './Components/City/City';

class App extends Component {


  render() {
    return (
      <div className="App">

          
        <City 
          weather="test"
          temperature="test"
          Humidity="test"
          wind="test"/>

      </div>
    );
  }
}

export default App;
