import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export const TripDetails = (props) => {
    // let's make a fetch call to the backend to return all of the train stations to loop through each stations to show the user's route

    const location = useLocation()
    const tripName = location.state.tripName
    const tripOriginLine = location.state.origin.line
    const tripOriginStation = location.state.origin.station
    const tripDestinationLine = location.state.destination.line
    const tripDestinationStation = location.state.destination.station

    return (
        <>
            <h1>Trip Details</h1>
            <h2>{tripName}</h2>
            <br />
            <h3>{tripOriginLine} Line {tripOriginStation} </h3>
            {/* This is where we'll create the for loop */}
            <h3>To</h3>
            <h3>{tripDestinationLine} Line {tripDestinationStation}</h3>
            <h5>Created by: {location.state.commuter.name}</h5>
            {props.user.profile === location.state.commuter._id && 
            <Link className="btn btn-warning" state={location.state} to="/editTrip">Edit</Link>
            }
            <Link className="btn btn-primary" to="/trips">Back</Link>
        </>
    )
}