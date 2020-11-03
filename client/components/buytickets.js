import React from 'react'
//import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Navbar from './navbar'
import CheckoutForm from './checkoutForm'

/**
 * COMPONENT
 */
const BuyTickets = () => {
  return (
    <div>
      <Navbar />
      <h1>Upcoming concerts</h1>
      <ul>
        <li>
          <h4>Coachella Festival @ Empire Polo Club</h4>
          <button type="button">
            <Link to="/checkoutForm">Purchase Tickets</Link>
          </button>
        </li>
        <li>
          <h4>Tamale Festival @ Indio Fairgrounds</h4>
          <button type="button">
            <Link to="/checkoutForm">Purchase Tickets</Link>
          </button>
        </li>
      </ul>
    </div>
  )
}

export default BuyTickets
