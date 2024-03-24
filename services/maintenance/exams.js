import axios from 'axios'

const API_URL = 'http://localhost:8080/codigo/tecsup/v1'

export async function createExam(form) {
  const url = API_URL + '/examenes'

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.post(url, form, { headers })

  console.log(response)

  return response.data
}

export async function fetchExams() {
  const url = API_URL + '/examenes'

  const token = localStorage.getItem('auth-token')

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}

export async function deleteExam(id) {
  const url = API_URL + '/examenes/' + id

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.delete(url, { headers })

  console.log(response)

  return response.data
}
