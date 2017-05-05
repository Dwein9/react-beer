import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchBeers, selectBeer} from '../actions/index'

class ShowBeers extends Component {

  componentDidMount() {
    this.props.dispatch(fetchBeers())
  }

  getBeer(beerId) {
    let beerSelection = this.props.beers.filter( beer => beer.id === beerId)[0]
    console.log("clicked");
    debugger
    this.props.dispatch(selectBeer(beerSelection))
  }

  render() {
    const beers = this.props.beers.map( (beer, index) => {
      return (
        <li key={beer.id}>
          <a onClick={this.getBeer.bind(this, beer.id)}>{index+1}. {beer.brewery} { beer.name }</a>
        </li>
      )
    })

    return (
      <div>
        <h2>All Beers</h2>
        <ul className="beers">
           { beers}
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

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchBeers: function() {
//       var action = fetchBeers()
//       dispatch(action)
//     },
//     beerSelect: function(b) {
//       var action = beerSelect(b)
//       dispatch(action)
//     }
//   }
// }

export default connect(mapStateToProps)(ShowBeers)
