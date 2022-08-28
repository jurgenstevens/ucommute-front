import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/stops`

function getStops(){
    return fetch(BASE_URL, {
        headers: {'Authorization': `Bearer ${tokenService.getToken()}`
    }
    })
    .then(res => res.json())
}

export {
    getStops
}