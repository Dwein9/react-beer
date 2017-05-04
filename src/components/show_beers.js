import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchBeers, fetchFavoriteBeers, fetchRandomBeer, beerSelect} from '../actions/index'

class ShowBeers extends Component {
   componentDidMount() {
     this.props.fetchBeers()
   }


   handleClick(event) {
        debugger;
       this.props.beerSelect(event.target.dataset.id)
     }


   render() {
   const beers = this.props.beers

   return (
     <div className=".col-xs-12 .col-sm-6 .col-lg-8">
       <h2>All Beers</h2>

       <ul className="beers">
         { beers.map( (beer, index) => {
           return <li key={beer.id}>
             <a data-id={beer.id} onClick={this.handleClick.bind(this)}>{index+1}. {beer.brewery} { beer.name }</a></li> }
         )}
       </ul>
     </div>
   )
 }
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBeers: function() {
      var action = fetchBeers()
      dispatch(action)
    },
    fetchFavoriteBeers: function() {
      var action = fetchFavoriteBeers()
      dispatch(action)
    },
    fetchRandomBeer: function() {
      var action = fetchRandomBeer()
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowBeers)
