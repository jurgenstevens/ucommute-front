import React, { useState, useEffect } from 'react'

function Origin() {
    // make a fetch call to access list of trains by color onClick and set them to the trainList
    const [trainData, setTrainData] = useState([])
    const [originLine, setOriginLine] = useState(null)
    const [originStation, setOriginStation] = useState([])

    const lines = ['---', 'Orange', 'Brown', 'Red', 'Blue', 'Green', 'Purple', 'Yellow']

    // use the fetch method to return all of the station from the database
    useEffect(() => {
        fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/stations`)
            .then((res) => res.json())
            .then((trainData) => {
                setTrainData(trainData)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    // create a function to set the selected train line to the originLine hook
    const handleLineChange = (e) => setOriginLine(e.target.value)
    console.log("This is origin line:", originLine)

    //create a function to render the dropdown for the stations if and when the line is selected
    const selectedLineStations = trainData.filter(station => station.line === originLine)

    // create a function to set the selected station to the originStation hook
    const handleStationChange = (e) => setOriginStation(e.target.value)
    console.log("This is origin station", originStation)

    return (
        <div>
            <h3>Origin</h3>
            <select onChange={e => handleLineChange(e)}>
                {lines.map(line => {
                    return(
                        <option value={line} key={line}>{line}</option>
                    )
                })}
            </select>
            {
            // set a ternary operator stating that if the user has picked an origin line, they can now pick a station for the origin
            originLine ? 
            <select onChange={e => handleStationChange(e)}>
                <option>---</option>
                {selectedLineStations.map((station, idx) => {
                    return(
                        <option value={station._id} key={idx}>{station.station}</option>
                    )
                })}
            </select> : <h4>Choose a train line.</h4>}
        </div>
    )
}

export default Origin
