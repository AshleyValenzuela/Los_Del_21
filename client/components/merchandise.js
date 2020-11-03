import React from 'react'
//import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from './navbar'

/**
 * COMPONENT
 */
export const Merchandise = () => {
  return (
    <div>
      <Navbar />
      <h2>coming soon...</h2>
    </div>
  )
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     email: state.user.email
//   }
// }

export default Merchandise
