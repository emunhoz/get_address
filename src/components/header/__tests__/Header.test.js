import React from 'react'
import { render } from '@testing-library/react'

import { Header } from '../Header'

describe('Component: Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<Header />)
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
