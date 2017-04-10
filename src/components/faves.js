import React, { Component } from 'react'
import { faveBeers } from '../actions/index.js'
import { connect } from 'react-redux'


class Faves extends Component {
  constructor(props) {
     super(props)
   }

  componentDidMount(){
    this.props.dispatch(faveBeers())
  }

  // getFaves(){
  //   let faves = []
  //   for (var i = 0; i < this.props.beers.length; i++) {
  //     if (this.props.beers[i].favorite){
  //       faves.push(this.props.beer[i])
  //     }
  //   }
  //   return faves
  // }

  render() {

    let faves = []
    for (var i = 0; i < this.props.beers.length; i++) {
      if (this.props.beers[i].favorite){
        faves.push(this.props.beers[i])
      }
    }

    let hi = faves.map((beer, i) =>
    { return <li key={i} > {i+1}. {beer.brewery} { beer.name } </li> } )
    return (
      <div className="faves">
        {hi}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    beers: state.beers
  }
}


export default connect(mapStateToProps)(Faves)
