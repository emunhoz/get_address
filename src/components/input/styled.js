import styled from 'styled-components'
import MaskedInput from 'react-maskedinput'

export const Input = styled(MaskedInput)`
  border-radius: 4px;
  border: none;
  padding: 10px;
  background-color: #f9f9fe;
  font-size: 18px;
  width: 100%;
  font-weight: 200;
  border: 1px solid transparent;

  &.error {
    background: #fff0f0;
    border: 1px solid red;

    ::placeholder {
      color: red;
    }
  }

  + p {
    color: red;
  }
`

export const Label = styled.label`
  font-size: 14px;
  margin-bottom: 10px;
`
