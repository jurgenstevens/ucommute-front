import * as tokenService from '../services/tokenService'

const BASE_URL = "http://localhost:3001"

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
        headers: {'Authorization': `Bearer ${tokenService.getToken()}`
    }
    })
    .then(res => res.json())
}

function deleteTrip(id){
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    .then(res => res.json())
}

function updateTrip(tripData){
    return fetch(`${BASE_URL}/${tripData.id}`, {
        method: 'PUT',
        headers: { 
            'Authorization': `Bearer ${tokenService.getToken()}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(tripData)
    })
    .then(res => res.json())
}



export { 
    createTrip,
    getTrips,
    deleteTrip,
    updateTrip
 }