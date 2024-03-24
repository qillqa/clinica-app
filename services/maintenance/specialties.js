import axios from 'axios'

const API_URL = 'http://localhost:8080/codigo/tecsup/v1'

export async function createSpecialty(form) {
  const url = API_URL + '/especialidades'

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.post(url, form, { headers })

  console.log(response)

  return response.data
}

export async function fetchSpecialties() {
  const url = API_URL + '/especialidades'

  const token = localStorage.getItem('auth-token')

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}

export async function fetchSpecialty(id) {
  const url = API_URL + '/especialidades/' + id

  const token = localStorage.getItem('auth-token')

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  const response = await fetch(url, options)

  return await response.json()
}


export async function editSpecialty(id, form) {
  const url = API_URL + '/especialidades/' + id

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.patch(url, form, { headers })

  console.log(response)

  return response.data
}

export async function deleteSpecialty(id) {
  const url = API_URL + '/especialidades/' + id

  const token = localStorage.getItem('auth-token')

  const headers = {
    'Authorization': `Bearer ${token}`
  }

  const response = await axios.delete(url, { headers })

  console.log(response)

  return response.data
}
