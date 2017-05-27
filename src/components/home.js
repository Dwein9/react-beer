import React, { Component } from 'react'
var Link = require('react-router-dom').Link;

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div>
          <h1>View beers by month or by style.</h1>
        </div>
        <div>
          {/* <Link className='btn link-button' to='/month'>Sign Up</Link> */}
          <Link className='btn link-button' to='/style'>Style</Link>
        </div>
     </div>
    )
  }
}

export default Home;
