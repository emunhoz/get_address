import React from 'react'
import { addDecorator } from '@storybook/react'
import { Center } from './center'
import GlobalStyle from '../src/styles/GlobalStyle'

addDecorator(storyFn => (
  <Center>
    <GlobalStyle />
    {storyFn()}
  </Center>
))
