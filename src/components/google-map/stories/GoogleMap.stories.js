import React from 'react'
import GoogleMap from '../GoogleMap'

export default { title: 'GoogleMap' }

export const primary = () => (
  <div style={{ position: 'relative', height: '410px', width: '410px' }}>
    <GoogleMap />
  </div>
)
