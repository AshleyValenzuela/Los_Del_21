import React from 'react'
//import {connect} from 'react-redux'
//import {Link} from 'react-router-dom'
import Navbar from './navbar'

/**
 * COMPONENT
 */
export const Music = () => {
  return (
    <div>
      <Navbar />
      <h2>Preview our latest album and create a Spotify playlist</h2>
      <iframe
        src="https://open.spotify.com/embed/album/7l8Oozv1owMMDz3463Sdna"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    </div>
  )
}

export default Music
