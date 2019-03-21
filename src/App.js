import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route} from 'react-router-dom'
import City from './Components/City/City';

class App extends Component {

  

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route path="" component={City}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
