import React from 'react'
import { Input } from '../Input'

export default { title: 'Input' }

export const zipCode = () => (
  <Input
    placeholder='Search'
    value=''
    mask='11111-111'
    onChange={e => e.target.value}
  />
)
