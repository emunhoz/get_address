import React from 'react'
import { fireEvent, render, wait } from '@testing-library/react'

import { GetAddress } from '../GetAddress'

describe('Component: GetAddress', () => {
  let wrapper

  beforeEach(() => {
    wrapper = render(<GetAddress />)
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('show needed help message', async () => {
    const { getByText } = wrapper
    const button = getByText('Buscar')

    fireEvent.submit(button)

    await wait(() => {
      expect(getByText('Campo necessário')).toBeInTheDocument()
    })
  })
})
