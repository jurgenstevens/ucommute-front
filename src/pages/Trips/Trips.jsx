import React from 'react';

function Trips(props) {
    // All of the trips from App.jsx state to map through
    const trips = props.trips
    return (
    <>
        <h1>Trips</h1>
        <div className="row">
            {trips.map(trip => 
            <div 
                key={trip._id}
                className="col-sm-3">
                <div className="card">
                <div className="card-body">
                    <h4>Trip Name:</h4>
                    <h5 className="card-title">{trip.tripName}</h5>
                    <p className="card-text">Origin: {trip.origin.station}</p>
                    <p className="card-text">Destination: {trip.destination.station}</p>
                    <a href="/" className="btn btn-primary">Details</a>
                    {(props.user.profile === trip.commuter._id) && 
                    <button onClick={() => props.handleDeleteTrip(trip._id)} className="btn btn-danger">Delete</button>
                    }
                </div>
                </div>
            </div>
        )}
        </div>
    </>
    );
}

export default Trips;
