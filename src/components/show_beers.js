import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import BeerListItem from './beer_list_item'


class ShowBeers extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <BeerListItem beers={this.props.beers}/>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchBeers: function() {
      var action = fetchBeers()
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(ShowBeers)
