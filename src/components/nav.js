import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
           <Link className="navbar-brand title" to='/'>{props.header}</Link>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  header: Proptypes.string.isRequired
}
