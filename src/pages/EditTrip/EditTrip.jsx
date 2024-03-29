import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function EditTrip(props) {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        tripName: location.state.tripName,
        origin: location.state.origin._id,
        destination: location.state.destination._id,
        id: location.state._id
    })

// make a fetch call to access list of trains by color onClick and set them to the trainList
const [trainData, setTrainData] = useState([])
const [originLine, setOriginLine] = useState('')
const [destinationLine, setDestinationLine] = useState('')

const lines = ['---', 'Orange', 'Brown', 'Red', 'Blue', 'Green', 'Pink', 'Purple', 'Yellow']

// use the fetch method to return all of the station from the database
useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/stations`)
        .then(res => res.json())
        .then(trainData => {
            setTrainData(trainData)
        })
        .catch(err => {
            console.log(err)
        })
}, [])

// ORIGIN
// create a function to set the selected train line to the originLine hook
const handleOriginLineChange = (e) => setOriginLine(e.target.value)

//create a function to render the dropdown for the stations if and when the line is selected
const selectedOriginLineStations = trainData.filter(station => station.line === originLine)

// DESTINATION
// create a function to set the selected train line to the selectedLine hook
const handleDestinationLineChange = (e) => setDestinationLine(e.target.value)

// create a function to set the selected station to formData.destination
const selectedDestinationLineStations = trainData.filter(station => station.line === destinationLine)

const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
}

const handleSubmit = async e => {
    e.preventDefault()
    try {
        // call will go here to submit to API
        props.handleUpdateTrip(formData)
        navigate('/trips')
    } catch (err) {
      console.log(err)
    }
}

// deconstruct
const { tripName, origin, destination } = formData

// form validation; can't create trip unless fields are filled
const isFormInvalid = () => {
    return !(tripName && origin && destination)
  }

return (
    <>
        {/* Origin */}
        <form
            autoComplete='off'
            onSubmit={handleSubmit}
        >
            <div className='origin'>
                <h3>Origin</h3>
                <select onChange={e => handleOriginLineChange(e)}>
                    {lines.map(line => {
                        return(
                            <option value={line} key={line}>{line}</option>
                        )
                    })}
                </select>
                <br />
                {
                // set a ternary operator stating that if the user has picked an origin line, they can now pick a station for the origin
                originLine ? 
                <select
                    onChange={handleChange}
                    value={origin}
                    name="origin"
                >
                    <option>---</option>
                    {selectedOriginLineStations.map((station, idx) => {
                        return(
                            <option value={station._id} key={idx}>{station.station}</option>
                        )
                    })}
                </select> : 
                <h4>Choose a train line.</h4>
                }
            </div>
            
            {/* Destination */}
            <div className='destination'>
                <h3>Destination</h3>
                <select onChange={e => handleDestinationLineChange(e)}>
                    {lines.map(line => {
                        return(
                            <option value={line} key={line}>{line}</option>
                        )
                    })}
                </select>
                <br />
                {
                // set a ternary operator stating that if the user has picked an origin line, they can now pick a station for the origin
                destinationLine ? 
                <select
                    onChange={handleChange}
                    value={destination}
                    name="destination"
                >
                    <option>---</option>
                    {selectedDestinationLineStations.map((station, idx) => {
                        return(
                            <option value={station._id} key={idx}>{station.station}</option>
                        )
                    })}
                </select> : <h4>Choose a train line.</h4>}
            </div>
            
        {/* Trip Name */}
            <div className="tripName">
                <h3>Trip Name:</h3>
                <input 
                    type="text"
                    value={tripName}
                    name='tripName'
                    onChange={handleChange}
                />
            </div>
            <br />
            <button className='btn btn-primary' disabled={isFormInvalid()}>Update</button>    
            <Link to="/trips">
                <button className='btn btn-danger'>Cancel</button>         
            </Link>
        </form>
    </>
    )
}

export default EditTrip;
