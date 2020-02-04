import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-right: 20px;
  position: relative;
`

export const HelpMessage = styled.p`
  position: absolute;
  margin: 0;
  bottom: -25px;
`

export const Spinner = styled.div`
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  border: 2px solid rgb(95, 159, 255);
  border-left-color: #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1.2s linear infinite;
`
