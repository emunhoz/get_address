import React from 'react'

const styles = {
  textAlign: 'center',
  width: '400px',
  display: 'flex',
  justifyContent: 'center',
  margin: '0 auto'
}

export const Center = ({ children }) => <div style={styles}>{children}</div>
