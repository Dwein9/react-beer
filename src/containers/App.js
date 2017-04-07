import React, { Component } from 'react';
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
// import BeerIndex from '../components/beer_index';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Navbar header={"My Beer List"}/>

        <div>
          <h2>Beer!</h2>
            <p className="intro"> This will be a list of beers I drank in 2016.</p>
            <Showbeers />
        </div>
      </div>
    );
  }
}

export default App;
