import React from 'react'
import { render } from '@testing-library/react'

import Home from '../Home'

describe('Component: Home page', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Home />)
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
