import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from '../components/nav';
import ShowBeers from '../components/show_beers';
import ShowStyles from '../components/show_styles';
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
                <Route path='/beers' component={ShowBeers} />
                <Route path='/styles' component={ShowStyles} />
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
