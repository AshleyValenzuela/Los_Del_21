import React from 'react'
//import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'

const Navbar = () => (
  <div id="nav-color">
    <div>
      <img id="home-image" src="https://losdel21.herokuapp.com/losdel21.JPG" />
    </div>
    <nav className="text-link">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/videos">Videos</NavLink>
      <NavLink to="/merchandise">Merchandise</NavLink>
      <NavLink to="/buytickets">Tickets</NavLink>
    </nav>
    <hr />
  </div>
)

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     handleClick() {
//       dispatch(logout())
//     }
//   }
// }

// export default connect(mapState, mapDispatch)(Navbar)
export default Navbar
