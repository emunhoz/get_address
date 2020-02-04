import { googleMapsApi } from './api'

export async function getGeoCode (cep) {
  try {
    const resp = await googleMapsApi.get(
      `json?address=${cep}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
    )
    return resp
  } catch (error) {
    console.log('deu erro')
    return error
  }
}
