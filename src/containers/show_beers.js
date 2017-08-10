import React, { Component } from 'react'
import BeerList from '../components/beer_list'
import beer from '../data/beer';

class ShowBeers extends Component {

  render() {
    return (
      <div>
        <BeerList beers={ beer } />
      </div>
    )
  }
}

export default ShowBeers
