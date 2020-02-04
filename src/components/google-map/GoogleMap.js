import React from 'react'
import PropTypes from 'prop-types'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const GoogleMap = ({ google, lat = -23.5168338, lng = -46.6139824 }) => (
  <Map
    google={google}
    zoom={16}
    initialCenter={{ lat, lng }}
    center={{ lat, lng }}
  >
    <Marker title='Minha localização' name='location' position={{ lat, lng }} />
  </Map>
)

GoogleMap.propTypes = {
  google: PropTypes.object,
  lat: PropTypes.number,
  lng: PropTypes.number,
  geoCode: PropTypes.object
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(GoogleMap)
