import React, { Component } from 'react'
// import { beerSelect } from '../actions/index.js'
import { connect } from 'react-redux'


class SelectBeer extends Component {

  render() {
    let beer = this.props.currentBeer
    debugger  

    return (
      <div className="select">
        <h1> {beer.brewery} { beer.name } </h1>
        <h3> {"Style: "} { beer.style } </h3>
        <h5> {"Drank in "} { beer.month } </h5>
      </div>
    )
  }
}

function mapStateToProps(state) {

    const beer = state.beers.find(beer => beer.id === state.currentBeer) || {}


  return {
    beers: state.beers,
    currentBeer: beer
  }
}

export default connect(mapStateToProps)(SelectBeer)
