import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import BeerListItem from '../components/beer_list_item'
import SelectBeer from '../components/select_beer';

class ShowBeers extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    return (
      <div>
        <BeerListItem beers={this.props.beers}/>
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

export default connect(null, mapDispatchToProps)(ShowBeers)
