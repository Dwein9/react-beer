import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBeers } from '../actions/index'
import StyleSelection from '../components/style_selection';

class ShowStyles extends Component {

  componentWillMount() {
    this.props.fetchBeers()
  }

  render() {
    debugger
    return (
      <div>
        <StyleSelection beers={this.props.beers}/>
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

export default connect(null, mapDispatchToProps)(ShowStyles)
