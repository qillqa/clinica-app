export async function login(form) {
  const url = 'https://mockmentor.4.us-1.fl0.io/auth/login'

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  return await response.json()
}