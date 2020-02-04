import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

export const Input = ({ value, placeholder, label, ...rest }) => (
  <>
    <S.Label>{label}</S.Label>
    <S.Input value={value} placeholder={placeholder} {...rest} />
  </>
)

Input.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string
}
