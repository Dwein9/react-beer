import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBeer, fetchRandomBeer } from '../actions/index'

class BeerListItem extends Component {

  constructor(props) {
    super(props)
    this.state = {beers: this.props.beers}
  }

  getBeer(beerId) {
    let beerSelection = this.state.beers.filter( beer => beer.id === beerId)[0]
    this.props.selectBeer(beerSelection)
  }

  handleClick() {
    console.log("Clicked");
  }

  render() {
    const beers = this.state.beers.map( (beer, index) => {
      return (
        <li key={beer.id}>
          <a onClick={this.getBeer.bind(this, beer.id)}>{index+1}. {beer.brewery} { beer.name }</a>
        </li>
      )
    })

    return (
      <div>
        <h2>Beer</h2>
        <div>
          <button onClick={this.handleClick.bind(this)}>Test</button>
        </div>
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
    selectBeer: state.selectBeer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    selectBeer: function(beer) {
      var action = selectBeer(beer)
      dispatch(action)
    },
    fetchRandomBeer: function() {
      var action = fetchRandomBeer()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListItem)
