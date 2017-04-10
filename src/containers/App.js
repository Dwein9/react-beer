import React, { Component } from 'react';
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
import Faves from '../components/faves';
// import BeerIndex from '../components/beer_index';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar header={"My Beer List"}/>
        <div className="container">
          <div className="row">
            <div className="centered intro">
              {this.props.children}
            </div>
            <Showbeers />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
