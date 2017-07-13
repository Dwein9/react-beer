import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import Favorites from '../components/favorites';
import SelectBeer from '../components/select_beer';

class ShowFavorites extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <Favorites beers={this.props.beers} />
        <SelectBeer />
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

export default connect(null, mapDispatchToProps)(ShowFavorites)
