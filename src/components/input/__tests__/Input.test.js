import React from 'react'
import { render } from '@testing-library/react'

import { Input } from '../Input'

describe('Component: Input', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(
      <Input placeholder='Search' mask='11111-111' value='01214100' />
    )
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('show zip code mask on input', () => {
    const { getByPlaceholderText } = wrapper
    const inputZipCode = getByPlaceholderText('Search')

    expect(inputZipCode.value).toBe('01214-100')
  })
})
