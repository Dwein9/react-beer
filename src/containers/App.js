import React, { Component } from 'react';
import Navbar from '../components/nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar header={"My Beer List"}/>
          <h2>Beer!</h2>
        <p className="intro">
          This will be a list of beers I drank in 2016.
        </p>
      </div>
    );
  }
}

export default App;
