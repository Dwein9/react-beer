import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import Favorites from '../components/favorites';

class ShowFavorites extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <Favorites beers={this.props.beers} />
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
