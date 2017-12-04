import React, { Component } from 'react'

export default class searchResults extends Component {

  displayResults = () => {
    let results = this.props.results.map((result, i) => {
      return (
        <li style={{'list-style-type': 'none'}} key={i}>
          <img src={result.img} alt=""/>
          <p>{result.name}</p>
        </li>
      )
    })
    return results
  }

  render() {
    if (!!this.props.results) {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <ul>
            {this.displayResults()}
          </ul>
        </div>
      )
    } else {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
        </div>
      )
    }
  }
}
