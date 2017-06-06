import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBeer, fetchRandomBeer, fetchBeers } from '../actions/index'
import Proptypes from 'prop-types';

class BeerListItem extends Component {

  constructor(props) {
    super(props)
    this.state = { beers: this.props.beers }
  }

  getBeer(beerId) {
    let beerSelection = this.state.beers.filter( beer => beer.id === beerId)[0]
    this.props.selectBeer(beerSelection)
  }

  getRandomBeer() {
    this.props.fetchRandomBeer()
    let randomBeer = this.props.beers
    this.setState( {beers: [randomBeer]} )
  }

  getAllBeers() {
    this.props.fetchBeers()
    let beers = this.props.beers
    this.setState( {beers: beers} )
  }


  render() {
    const beers = this.state.beers.map( (beer, index) => {
      return (
        <li key={index}>
          <a onClick={this.getBeer.bind(this, beer.id)}>{index+1}. {beer.brewery} { beer.name }</a>
        </li>
      )
    })

    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" >
        <h2>Beer</h2>
        <span>
          <button className="toggle" onClick={this.getRandomBeer.bind(this)}>Random</button>
          <button className="toggle" onClick={this.getAllBeers.bind(this)}>See All</button>
        </span>
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

function mapDispatchToProps(dispatch) {
  return {
    selectBeer: function(beer) {
      var action = selectBeer(beer)
      dispatch(action)
    },
    fetchRandomBeer: function() {
      var action = fetchRandomBeer()
      dispatch(action)
    },
    fetchBeers: function() {
      var action = fetchBeers()
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BeerListItem)



BeerListItem.propTypes = {
  beers: Proptypes.arrayOf(Proptypes.object.isRequired).isRequired,
  fetchRandomBeer: Proptypes.func.isRequired,
  fetchBeers: Proptypes.func.isRequired,
}
