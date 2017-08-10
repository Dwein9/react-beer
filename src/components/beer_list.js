import React, { Component } from 'react'
import Proptypes from 'prop-types';
import SelectBeer from './select_beer';

class BeerList extends Component {
  constructor(props) {
    super(props)
    this.state = { selection: false, beers: this.props.beers }
  }

  getBeer(beerId) {
    debugger
    let selectedBeer = this.props.beers.filter( beer => beer.id === beerId)[0]

    this.setState({
      selection: selectedBeer,
    })

  }

  getRandomBeer() {
    let num = Math.floor(Math.random()*this.props.beers.length)
    this.setState( {beers: [this.props.beers[num]], selection: this.props.beers[num] } )
  }

  getAllBeers() {
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
      <div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h2>Beer</h2>

          <span>
            <button className="toggle" onClick={this.getRandomBeer.bind(this)}>Random</button>
            <button className="toggle" onClick={this.getAllBeers.bind(this)}>See All</button>
          </span>

          <ul className="beers">
            { beers }
          </ul>
        </div>

      <SelectBeer className="select col-xs-12 col-sm-12 col-md-6 col-lg-8" selection={this.state.selection} />

    </div>
    )
  }
}

export default BeerList

BeerList.propTypes = {
  beers: Proptypes.arrayOf(Proptypes.object.isRequired).isRequired,
}
