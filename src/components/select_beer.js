import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectBeer extends Component {
  render() {
    if (!!this.props.selectBeer) {
      const beer = this.props.selectBeer
      return (
        <div className="select col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <h1> {"Name:"} {beer.brewery} { beer.name } </h1>
          <h3> {"Style: "} { beer.style } </h3>
          <h5> {"Drank in "} { beer.month } </h5>

          <h3> { beer.favorite ? "This is a personal favorite." : "" } </h3>

        </div>
      )}
       return (
        <div>
          {'Select a beer from the list'}
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    selectBeer: state.selectBeer
  }
}

export default connect(mapStateToProps)(SelectBeer)
