import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const GoogleMap = ({ google }) => (
  <Map google={google} zoom={10}>
    <Marker title='Minha localização' name='location' />
  </Map>
)

GoogleMap.propTypes = {
  google: PropTypes.object
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(GoogleMap)
