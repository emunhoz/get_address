import React from 'react'
import { GetAddress } from '../GetAddress'

export default { title: 'GetAddress' }

export const primary = () => (
  <GetAddress onSubmit={values => console.log(values)} />
)
