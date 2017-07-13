import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBeer} from '../actions/index'
// import Proptypes from 'prop-types';

class Favorites extends Component {

  constructor(props) {
    super(props)
    this.state = { beers: this.props.beers.filter( beer => beer.favorite) }
  }

  getBeer(beerId) {
    let beerSelection = this.state.beers.filter( beer => beer.id === beerId)[0]
    this.props.selectBeer(beerSelection)
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

function mapDispatchToProps(dispatch) {
  return {
    selectBeer: function(beer) {
      var action = selectBeer(beer)
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
