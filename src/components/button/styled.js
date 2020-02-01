import styled from 'styled-components'

export const Button = styled.button`
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
  cursor: pointer;
  padding: 12px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 4px;
  font-weight: bold;

  background-image: linear-gradient(
    to right,
    #6aa3ff 0%,
    #9fe1ff 51%,
    #6ca4ff 100%
  );

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-position: right center;
  }
`
