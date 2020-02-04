import { viaCepApi } from '../services/api'

export async function getCep (cep) {
  try {
    const resp = await viaCepApi.get(`${cep}/json/`)
    return resp
  } catch (error) {
    console.log('deu erro')
    return error
  }
}
