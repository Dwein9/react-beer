import React, { Component } from 'react';
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
import StyleSelection from '../components/style_selection';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar header={"My Beer List"}/>
        <div className="container">
          <div className="row">
            <div>
              <div>
                <StyleSelection />
              </div>
              <Showbeers />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
