import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders Hello app text', () => {
  const { getByText } = render(<App />)
  expect(getByText(/Hello app/i)).toBeInTheDocument()
})
