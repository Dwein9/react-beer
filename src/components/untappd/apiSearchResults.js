import React, { Component } from 'react'

export default class APIsearchResults extends Component {

  displayResults = () => {
    const styleList = {
      foat: 'left',
      position: 'relative',
      width: '30%',
      'paddingBottom': '30%',
      margin: '1.66%',
    }

    const stylePhoto = {
      position: 'absolute',
      height:' 80%',
      width: '90%',
      padding: '10% 5%',
    }

    let results = this.props.results.items.map((result, i) => {
      let fullName = `${result.brewery.brewery_name} ${result.beer.beer_name}`
      return (
        <li style={styleList} key={i}>
          <p>{fullName}</p>
          <br></br>
          <img  style={stylePhoto} src={result.beer.beer_label} alt=""/>
        </li>
      )
    })
    return results
  }

  render() {
    if (!!this.props.results) {
      return (
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8">
          <h1>Hi {this.props.results.name}</h1>
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
