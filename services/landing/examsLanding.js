import axios from 'axios'

const API_URL = 'http://localhost:8080/codigo/tecsup/v1'

export async function fetchExamsLanding() {
  const url = API_URL + '/examenes'

  const response = await fetch(url)

  return await response.json()
}

