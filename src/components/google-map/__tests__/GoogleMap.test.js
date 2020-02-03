import React from 'react'
import { render } from '@testing-library/react'

import GoogleMap from '../GoogleMap'

describe('Component: GoogleMap', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<GoogleMap />)
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
