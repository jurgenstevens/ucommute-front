import React from 'react';
import { Link } from 'react-router-dom';

function Trips(props) {
    // All of the trips from App.jsx state to map through
    const trips = props.trips
    const userId = props.user.profile
    // Map only through users' trips
    const userTrips = trips.filter(trip => trip.commuter._id === userId)

    return (
    <>
        <h1 className='ucommuteHeaderFont'>Trips</h1>
        <div className="row">
            {
            userTrips.map(userTrips => 
            <div 
                key={userTrips._id}
                className="col-sm-3">
                <div className="card">
                <div className="card-body trip-card">
                    <h4>Trip Name:</h4>
                    <h5 className="card-title">{userTrips.tripName}</h5>
                    <p className="card-text">Origin: {userTrips.origin.station}</p>
                    <p className="card-text">Destination: {userTrips.destination.station}</p>
                    {(props.user.profile === userTrips.commuter._id) && 
                    <button onClick={() => props.handleDeleteTrip(userTrips._id)} className="btn btn-danger">Delete</button>}
                    <Link to="/tripDetails" className='btn btn-warning' state={userTrips} >
                        Details
                    </Link>
                </div>
                </div>
            </div>
        )}
        </div>
    </>
    );
}

export default Trips;
