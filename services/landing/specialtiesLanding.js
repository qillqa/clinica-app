import axios from 'axios'

const API_URL = 'http://localhost:8080/codigo/tecsup/v1'

export async function fetchSpecialtiesLanding() {
  const url = API_URL + '/especialidades'

  const response = await fetch(url)

  return await response.json()
}
