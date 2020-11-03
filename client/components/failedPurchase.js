import React from 'react'
import {Link} from 'react-router-dom'

class FailedPurchase extends React.Component {
  render() {
    return (
      <div className="cart">
        <h1>Thank you for your purchase!</h1>
        <h3>
          <Link to="/buytickets">Shop again</Link>
        </h3>
      </div>
    )
  }
}

export default FailedPurchase
