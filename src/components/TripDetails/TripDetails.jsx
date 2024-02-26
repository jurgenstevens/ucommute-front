import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

export const TripDetails = (props) => {
    // let's make a fetch call to the backend to return all of the train stations to loop through each stations to show the user's route
    // make a fetch call to access list of trains by color onClick and set them to the trainData
    const [trainData, setTrainData] = useState([])
    console.log(trainData)

    const location = useLocation()
    const tripName = location.state.tripName
    const tripOriginLine = location.state.origin.line
    const tripOriginStation = location.state.origin.station
    const tripDestinationLine = location.state.destination.line
    const tripDestinationStation = location.state.destination.station

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

    return (
        <>
            <h1 className='ucommuteHeaderFont'>Trip Details</h1>
            <h2 className='ucommuteHeaderFont'>{tripName}</h2>
            <br />
            <h3 className='ucommuteHeaderFont'>{tripOriginLine} Line {tripOriginStation} </h3>
            {/* This is where we'll create the for loop */}
            <h3 className='ucommuteHeaderFont'>To</h3>
            <h3 className='ucommuteHeaderFont'>{tripDestinationLine} Line {tripDestinationStation}</h3>
            <h5 className='ucommuteHeaderFont'>Created by: {location.state.commuter.name}</h5>
            {props.user.profile === location.state.commuter._id && 
            <Link className="btn btn-warning" state={location.state} to="/editTrip">Edit</Link>
            }
            <Link className="btn btn-primary" to="/trips">Back</Link>
        </>
    )
}