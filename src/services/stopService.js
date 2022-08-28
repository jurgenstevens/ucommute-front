import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/stops`

function getStops(){
    return fetch(BASE_URL)
    .then(res => res.json())
}

function getStop(id){
    return fetch(`${BASE_URL}/${id}`)
    .then(res => res.json())
}

export {
    getStops,
    getStop
}