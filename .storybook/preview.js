import React from 'react'
import { addDecorator } from '@storybook/react'
import { Center } from './center'

addDecorator(storyFn => <Center>{storyFn()}</Center>)
