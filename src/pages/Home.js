import React from 'react'
import GlobalStle from '../styles/GlobalStyle'
import Header from '../components/header'
import GetAddress from '../components/forms/get-address'
import GoogleMap from '../components/google-map/GoogleMap'
import { viaCepApi, googleMapsApi } from '../services/api'
import * as S from './styled'

const Home = () => {
  const [addressForm, setAddressForm] = React.useState({})
  const [geoCode, setGeoCode] = React.useState({})

  const handleSubmit = async ({ cep }) => {
    cep = cep.replace('-', '')
    const formattedCep = cep.slice(0, 5) + '-' + cep.slice(5, cep.length)

    const viacepResponse = await viaCepApi.get(`${formattedCep}/json/`)
    const geocodeResponse = await googleMapsApi.get(
      `json?address=${formattedCep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )

    setAddressForm(viacepResponse.data)
    setGeoCode(geocodeResponse.data.results[0].geometry.location)
  }

  return (
    <>
      <GlobalStle />
      <Header>
        <GetAddress handleSubmitForm={handleSubmit} />
      </Header>

      <div style={{ position: 'relative', height: '24em', margin: '30px' }}>
        <S.AddressList>
          <S.AddressStyle>{addressForm.logradouro}</S.AddressStyle>
          <p>{addressForm.bairro}</p>
          {addressForm.localidade && (
            <p>
              {addressForm.localidade} - {addressForm.uf}
            </p>
          )}
          <p>{addressForm.cep}</p>
        </S.AddressList>
        <GoogleMap {...geoCode} />
      </div>
    </>
  )
}

export default Home
