import React, { Component } from 'react';
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
// import BeerIndex from '../components/beer_index';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar header={"My Beer List"}/>
        <div className="container">
          <div className="row">
            <div className="centered intro">
              <h2>Beer!</h2>
              <p> This will be a list of beers I drank in 2016.</p>
            </div>
          </div>

          <Showbeers />
        </div>
      </div>
    );
  }
}

export default App;
