import React, {Component} from 'react'
// import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {
  VideoHome,
  Home,
  About,
  Music,
  Videos,
  Merchandise,
  BuyTickets,
  SuccessPurchase,
  FailedPurchase,
  CheckoutForm
} from './components'

/**
 * COMPONENT
 */
class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={VideoHome} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/music" component={Music} />
        <Route path="/videos" component={Videos} />
        <Route path="/merchandise" component={Merchandise} />
        <Route path="/buytickets" component={BuyTickets} />
        <Route path="/checkoutForm" component={CheckoutForm} />
        <Route path="/successfulPurchase" component={SuccessPurchase} />
        <Route path="/failedPurchase" component={FailedPurchase} />
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
// const mapState = state => {
//   return {
//     // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
//     // Otherwise, state.user will be an empty object, and state.user.id will be falsey
//     isLoggedIn: !!state.user.id
//   }
// }

// const mapDispatch = dispatch => {
//   return {
//     loadInitialData() {
//       dispatch(me())
//     }
//   }
// }

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default Routes
