import React from 'react'
import * as S from './styled'

export const Input = ({ value, placeholder, ...rest }) => (
  <S.Input
    value={value}
    placeholder={placeholder}
    {...rest}
    data-testid='input-search'
  />
)
