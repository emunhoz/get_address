import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

export const Button = ({ children, onClick, disabled, ...rest }) => (
  <S.Button onClick={onClick} disabled={disabled} {...rest}>
    {children}
  </S.Button>
)

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool
}
