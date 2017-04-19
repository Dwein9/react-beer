import React, { Component } from 'react'
import { connect } from 'react-redux'
import {fetchBeers, faveBeers} from '../actions/index'

class ShowBeers extends Component {
  constructor(props) {
    super(props)
    this.state = { beer: this.props.beers }
 }

   componentDidMount() {
     this.props.dispatch(fetchBeers())
   }

   randomOne(){
     let num = Math.floor(Math.random()*this.props.beers.length)

     this.setState({
       beer: [this.props.beers[num]]
     })
   }

   seeAll(){
     this.setState({
       beer: this.props.beers
     })
   }

   faves(){
     function isFave(obj) {
       if (obj.favorite) {
         return true
       }
       return false;
     }

     this.setState({
       beer: this.props.beers.filter(isFave)
     })
   }

  render() {
     let beers = this.state.beer.map((beer, i) => { return <li key={i} > {i+1}. {beer.brewery} { beer.name } </li> } )


     if (beers.length > 25) {
       return (
         <div className="row">
           <button onClick={this.randomOne.bind(this)}>Get Random</button>
           <button onClick={this.faves.bind(this)}>Get Favorites</button>
           <ul className="centered beers">
             <h2>All Beers</h2>
             { beers }
           </ul>
         </div>
       )
     } else if (beers.length > 2) {
       return (
         <div className="row">
           <button onClick={this.randomOne.bind(this)}>Get Random</button>
           <button onClick={this.seeAll.bind(this)}>See All</button>
           <ul className="centered beers">
             <h2>Favorite Beers</h2>
             { beers }
           </ul>
         </div>
       )
     }

      return (
        <div className="row">
          <button onClick={this.seeAll.bind(this)}>See All</button>
          <button onClick={this.faves.bind(this)}>Get Favorites</button>
          <ul className="centered beers">
            <h2>Random Beer</h2>
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
