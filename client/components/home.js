import React from 'react'
//import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import Navbar from './navbar'

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div>
      <Navbar />
      <h3>August 2020 Release</h3>
      <h3>Live from Coachella, California</h3>
      <h3>Now on Spotify</h3>
      <img id="home-image" src="http://localhost:8080/album.png" />
      <iframe
        src="https://open.spotify.com/follow/1/?uri=spotify:artist:22jVrO8Tojt0l3OIEd460N&size=detail&theme=light"
        width="300"
        height="56"
        scrolling="no"
        frameBorder="0"
        style={{border: 'none', overflow: 'hidden'}}
        allowtransparency="true"
      />{' '}
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

// export default connect(mapState)(Home)
export default Home
