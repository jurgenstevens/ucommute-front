import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/trips`

async function createTrip(tripData) {
  const res = await fetch(BASE_URL, {
    headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
     },
     body: JSON.stringify(tripData)
  })
  return await res.json()
}

export { 
    createTrip
 }