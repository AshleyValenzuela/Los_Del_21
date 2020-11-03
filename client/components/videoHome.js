import React from 'react'
//import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// import ReactAudioPlayer from 'react-audio-player'

/**
 * COMPONENT
 */
const VideoHome = () => {
  return (
    <div>
      <video id="my-video" className="video" controls autoPlay muted loop>
        <source src="ConcertVideo.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <button type="button">
          <Link to="/home">Enter Site</Link>
        </button>
      </div>
    </div>
  )
}
export default VideoHome
