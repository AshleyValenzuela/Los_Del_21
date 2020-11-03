/**
 * This is an example of a basic node.js script that performs
 * the Authorization Code oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#authorization_code_flow
 */

const express = require('express')
const path = require('path')
const router = require('express').Router() //
var request = require('request') // "Request" library
var cors = require('cors')
var querystring = require('querystring')
var cookieParser = require('cookie-parser')
const {nextTick} = require('process')

/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */

//function that should stay
var generateRandomString = function(length) {
  var text = ''
  var possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return text
}

var stateKey = 'spotify_auth_state'

router
  .use(express.static(path.join(__dirname, '..', 'public')))
  .use(cors())
  .use(cookieParser())

//another starts here
router.get('/login', function(req, res) {
  console.log('IN LOGIN')
  var state = generateRandomString(16)
  res.cookie(stateKey, state)

  // your application requests authorization
  var scope = 'user-read-private user-read-email' //user-library-modify streaming user-follow-modify playlist-modify-public user-modify-playback-state
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: scope,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        state: state
      })
  )
  console.log('LOVE')
})
//another starts here

router.get('/callback', function(req, res) {
  console.log('IN CALLBACk')

  // your application requests refresh and access tokens
  // after checking the state parameter

  var code = req.query.code || null
  var state = req.query.state || null
  var storedState = req.cookies ? req.cookies[stateKey] : null

  if (state === null || state !== storedState) {
    console.log('hey 1')
    res.redirect(
      '/#' +
        querystring.stringify({
          error: 'state_mismatch'
        })
    )
  } else {
    console.log('hey 2')

    res.clearCookie(stateKey)
    var authOptions = {
      url: 'https://accounts.spotify.com/api/token',
      form: {
        code: code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        grant_type: 'authorization_code'
      },
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(
            process.env.SPOTIFY_CLIENT_ID +
              ':' +
              process.env.SPOTIFY_CLIENT_SECRET
          ).toString('base64')
      },
      json: true
    }

    request.post(authOptions, function(error, response, body) {
      console.log('IN POST!!!')
      if (error) {
        console.log(error.stack)
      }
      if (!error && response.statusCode === 200) {
        var access_token = body.access_token,
          refresh_token = body.refresh_token

        var options = {
          url: 'https://api.spotify.com/v1/me',
          headers: {Authorization: 'Bearer ' + access_token},
          json: true
        }

        // use the access token to access the Spotify Web API
        request.get(options, function(error, response, body) {
          console.log(body)
          if (error) {
            console.log(error.stack)
          }
        })

        // we can also pass the token to the browser to make requests from there
        console.log('REDIRECT HASH')

        res.redirect(
          '/home/#' +
            querystring.stringify({
              access_token: access_token,
              refresh_token: refresh_token
            })
        )
      } else {
        console.log('IDK')

        res.redirect(
          '/#' +
            querystring.stringify({
              error: 'invalid_token'
            })
        )
      }
    })
  }
})
//another starts here
router.get('/refresh_token', function(req, res) {
  console.log('IN GET!!!')

  // requesting access token from refresh token
  var refresh_token = req.query.refresh_token
  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      Authorization:
        'Basic ' +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ':' +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString('base64')
    },
    form: {
      grant_type: 'refresh_token',
      refresh_token: refresh_token
    },
    json: true
  }

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      var access_token = body.access_token
      res.send({
        access_token: access_token
      })
    }
  })
})

// console.log('Listening on 8080');
// router.listen(8080);

module.exports = router
