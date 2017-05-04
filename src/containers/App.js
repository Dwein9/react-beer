import React, { Component } from 'react';
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
import SelectBeer from '../components/select_beer';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar header={"My Beer List"}/>
        <div className="container">
            <div>
              <Showbeers />
            </div>

            <div className='col-md-8'>
              <SelectBeer />
            </div>

        </div>
      </div>
    );
  }
}

export default App;
