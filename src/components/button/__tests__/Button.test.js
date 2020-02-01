import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Button } from '../Button'

describe('Component: Button', () => {
  let wrapper
  const mockOnClickFunction = jest.fn()

  beforeEach(() => {
    wrapper = render(<Button onClick={mockOnClickFunction}>Hello</Button>)
  })

  it('render the component', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should trigger function when button is pressed', () => {
    const { getByText } = wrapper
    fireEvent.click(getByText('Hello'))
    expect(mockOnClickFunction).toHaveBeenCalled()
  })
})
