import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchBeers} from '../actions/index'

class ShowBeers extends Component {
  constructor(props) {
     super(props)
   }

   componentDidMount() {
     this.props.dispatch(fetchBeers())
   }

  render() {
     let beers = this.props.beers.map((beer, i) =>
      { return <li key={i} > {i+1}. {beer.brewery} { beer.name } </li> } )
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

export default connect(mapStateToProps)(ShowBeers)
