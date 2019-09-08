import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"


const NavBar = props => {
  return (
    <nav>
      <ul>
        <li><Link>Home</Link></li>
        <li><Link>Bio</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Blog!</Link></li>
      </ul>

    </nav>
  )
}

NavBar.propTypes = {

}

export default NavBar
