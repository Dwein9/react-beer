import React, { Component } from 'react'
import SearchResults from './searchResults'
import SearchForm from './searchForm'

export default class searchPage extends Component {

  render() {
    return (
      <div className="container">
        <SearchForm />
        <SearchResults />
      </div>
    )
  }
}
