import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route} from 'react-router-dom'
import WeatherInformation from './Components/WeatherInformation/WeatherInformation';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="" component={WeatherInformation}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
