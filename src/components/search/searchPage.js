import React, { Component } from 'react'
import axios from 'axios'

import SearchResults from './searchResults'
import SearchForm from './searchForm'

export default class searchPage extends Component {
  constructor(props) {
  super(props)
    this.state = { results: false }
  }

  parseData(data){
    var results = {}
    for (let i = 1; i < data.length; i++) {
      results[i] = {
        img: data[i].split('<img src="')[1].split('">')[0],
        name: data[i].split('<p class="name">')[1].split('>')[1].split('<')[0]
      }
    }
    return results
  }


  search(query){
    axios.get(`https://untappd.com/search?q=${query.split(" ").join("+")}&type=beer&sort=all`)
      .then(response => {
        var data = response.data.split('<div class="results-container">')[1].split('<div class="beer-item ">')
        var results = this.parseData(data)
        this.setState({results: results})
      })
  }

  render() {
    return (
      <div className="container">
        <SearchForm search={this.search.bind(this)}/>
        <SearchResults results={this.state.results}/>
      </div>
    )
  }
}
