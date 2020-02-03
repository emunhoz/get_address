import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

export const Input = ({ value, placeholder, ...rest }) => (
  <S.Input
    value={value}
    placeholder={placeholder}
    {...rest}
    data-testid='input-search'
  />
)

Input.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string
}
