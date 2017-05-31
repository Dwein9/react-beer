import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/nav';
import Showbeers from '../components/show_beers';
import StyleSelection from '../components/style_selection';
import Home from '../components/home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <div>
          <Navbar header={"My Beer List"}/>
          <div className="container">
            <div className="row">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/beers' component={Showbeers} />
                <Route path='/months' component={StyleSelection} />
              </Switch>
            </div>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
