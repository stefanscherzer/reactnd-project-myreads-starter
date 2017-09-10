import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NoMatch extends Component {

  render() {

    return (
        <div>
          <h3>404 page not found</h3>
          <p>We are sorry but the page you are looking for does not exist.</p>
          <p><Link to="/">Back to Home</Link></p>
        </div>
    )
  }
}

export default NoMatch
