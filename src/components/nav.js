import React from 'react';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
           <a className="navbar-brand title" href="#">{props.header}</a>
        </div>
      </div>
    </nav>
  )
}
