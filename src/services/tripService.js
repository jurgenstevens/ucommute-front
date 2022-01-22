import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/trips`

function createTrip(tripData) {
  return fetch(BASE_URL, {
        method: "POST",
        headers: { 
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
     },
     body: JSON.stringify(tripData)
  })
  .then (res =>res.json())
}

function getTrips(){
    return fetch(BASE_URL, {
        headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    .then(res => res.json())
}



export { 
    createTrip,
    getTrips
 }