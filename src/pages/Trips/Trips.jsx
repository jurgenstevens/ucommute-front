import React from 'react';

function Trips(props) {
    const trips = props.trips
    console.log('This is trips from Trips: ' ,trips)
    return (
    <>
        <h1>Trips</h1>
        <div className="row">
            {trips.map((trip, idx) => 
            <div 
                key={idx}
                className="col-sm-3">
                <div className="card">
                <div className="card-body">
                    <h4>Trip Name:</h4>
                    <h5 className="card-title">{trip.tripName}</h5>
                    <p className="card-text">Origin: {trip.origin.station}</p>
                    <p className="card-text">Destination: {trip.destination.station}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
                </div>
            </div>
        )}
        </div>
    </>
    );
}

export default Trips;
