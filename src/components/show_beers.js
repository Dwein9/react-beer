import React, { Component } from 'react'
import { connect } from 'react-redux'
import allBeers from '../actions/index.js'


class ShowBeers extends Component {

  componentDidMount() {
    var action = allBeers()
    this.props.dispatch(action)
}

  render() {
     let beers = this.props.beers.map((beer, i) =>
      { return <li key={i} > {beer.brewery} { beer.name } </li> } )
     return (
       <div className="row">
         <ul className="centered beers">
           <h2>All Beers</h2>
           { beers }
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

 const hello = connect(mapStateToProps)(ShowBeers)
 export default hello
