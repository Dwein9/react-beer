import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { selectBeer, fetchRandomBeer, fetchBeers } from '../actions/index'
// import Proptypes from 'prop-types';

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = { beers: this.props.beers.filter( beer => beer.favorite) }
  }

  render() {
    const beers = this.state.beers.map( (beer, index) => {
      return (
        <li key={index}>
          <a>{index+1}. {beer.brewery} { beer.name }</a>
        </li>
      )
    })

    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" >
        <h2>Favorites</h2>
        <ul className="beers">
           { beers }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers,
  }
}


export default connect(mapStateToProps, null)(Favorites)
