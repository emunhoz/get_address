import React from 'react'
import * as S from './styled'

export const Button = ({ children, onClick, disabled, ...rest }) => (
  <S.Button onClick={onClick} disabled={disabled} {...rest}>
    {children}
  </S.Button>
)
