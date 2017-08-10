import React, { Component } from 'react'

class SelectBeer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!!this.props.selection) {
      const beer = this.props.selection
      return (
        <div>
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

export default SelectBeer
