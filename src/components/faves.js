import React, { Component } from 'react'
import { faveBeers } from '../actions/index.js'
import { connect } from 'react-redux'


class Faves extends Component {
  constructor(props) {
     super(props)
   }

  getFaves(){
    this.props.dispatch(faveBeers())
    debugger
  }

  render() {
    return (
      <div className="faves">
        <button onClick={this.getFaves.bind(this)}>Hi</button>
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
