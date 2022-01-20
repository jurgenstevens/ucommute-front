import React, { useState, useEffect } from 'react'

function Origin() {
    // make a fetch call to access list of trains by color onClick and set them to the trainList
    const [trainData, setTrainData] = useState([])
    const [originLine, setOriginLine] = useState(null)
    const [originStation, setOriginStation] = useState(null)

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

    // create a function to set the selected train line to the selectedLine hook
    const handleLineChange = (e) => setOriginLine(e.target.value)
    console.log("This is origin line:", originLine)

    //create a function to render the dropdown for the stations if and when the line is selected

    return (
        <div>
            Origin
            <select onChange={e => handleLineChange(e)}>
                {lines.map(line => {
                    return(
                        <option value={line} key={line}>{line}</option>
                    )
                })}
            </select>
        </div>
    )
}

export default Origin
