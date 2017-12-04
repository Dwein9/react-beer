import React, { Component } from 'react'

export default class searchResults extends Component {

  displayResults = () => {
    const styleList = { float: 'left',
      position: 'relative',
      width: '30%',
      'padding-bottom': '30%',
      margin: '1.66%',
      overflow: 'hidden'
    }

    const stylePhoto = {
      position: 'absolute',
      height:' 80%',
      width: '90%',
      padding: '10% 5%',
    }

    let results = this.props.results.map((result, i) => {
      return (
        <div style={styleList} key={i}>
          <img style={stylePhoto} src={result.img} alt=""/>
          <p>{result.name}</p>
        </div>
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
