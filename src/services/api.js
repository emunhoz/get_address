import axios from 'axios'

export const googleMapsApi = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/geocode/'
})

export const viaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/'
})

export default viaCepApi
