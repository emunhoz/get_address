import React from 'react'
import GlobalStle from '../styles/GlobalStyle'
import Header from '../components/header'
import GetAddress from '../components/forms/get-address'
import GoogleMap from '../components/google-map/GoogleMap'
import { getCep } from '../services/getCep'
import { getGeoCode } from '../services/getGeoCode'
import * as S from './styled'

const Home = () => {
  const [addressForm, setAddressForm] = React.useState({})
  const [geoCode, setGeoCode] = React.useState({})
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  const handleSubmit = async ({ cep }) => {
    try {
      setLoading(true)
      const respViaCep = await getCep(cep)
      const respGeoCode = await getGeoCode(cep)
      setAddressForm(respViaCep.data)
      setGeoCode(respGeoCode.data.results[0].geometry.location)
      setError(false)
      setLoading(false)
    } catch (err) {
      setError(true)
      setLoading(false)
    }
  }

  return (
    <>
      <GlobalStle />
      <Header>
        <GetAddress handleSubmitForm={handleSubmit} loading={loading} />
      </Header>

      <S.Main>
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
        {error && (
          <S.AddressStyle data-test-id='message-not-found'>
            Nenhum endereço encontrado!
          </S.AddressStyle>
        )}
        {!error && <GoogleMap {...geoCode} />}
      </S.Main>
    </>
  )
}

export default Home
