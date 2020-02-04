import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

export const Header = ({ children }) => <S.Header>{children}</S.Header>

Header.propTypes = {
  children: PropTypes.object
}
