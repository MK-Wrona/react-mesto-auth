export const BASE_URL = 'https://auth.nomoreparties.co';

export const getContent = (token) => {return fetch(`${BASE_URL}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  },
})
  .then((res) => {
    return res.json()
  })
  .then((data) => data)
}

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
}; 

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password })
  })
  .then((data) => {
    console.log(data)
    if (data.token) {
      localStorage.setItem('jwt', data.token);
      return data.token;
    }
  })
}

