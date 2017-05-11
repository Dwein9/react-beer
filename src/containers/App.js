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
          <div className="row">
            {this.props.children}
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <Showbeers />
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
              <SelectBeer />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
