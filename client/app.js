import React from 'react'
import Routes from './routes'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
// import { CheckoutForm } from "./components";
//import "./App.css";
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
const promise = loadStripe(
  'pk_test_51HYi63FGeX5HICoqkrtpY1PMNaSTGDE61DYU7CPmt9s68em9OihucKXmViLjcXlAyxiBEztNRGRCFXwjMx2Td32S00S47cU1U0'
)

export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <Routes />
      </Elements>
    </div>
  )
}

// const App = () => {
//   return (
//     <div>
//       <Routes />
//     </div>
//   )
// }

// export default App
