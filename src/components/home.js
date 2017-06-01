import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <h1>Select to view all beers or beers by style.</h1>
          <button className='btn btn-home'><Link to='/beers'>View All Beers</Link></button>
          <button className='btn btn-home'><Link to='/styles'>View By Styles</Link></button>
        </div>
     </div>
    )
  }
}

export default Home;
