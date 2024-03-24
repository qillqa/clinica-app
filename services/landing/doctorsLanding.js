import axios from 'axios'

const API_URL = 'http://localhost:8080/codigo/tecsup/v1'

export async function fetchDoctorsLanding() {
  const url = API_URL + '/medicos'

  const response = await fetch(url)

  return await response.json()
}

