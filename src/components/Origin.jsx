import React, { useState } from 'react'

function Origin() {
    // make a fetch call to access list of trains by color onClick and set them to the trainList
    const [trainList, setTrainList] = useState([])

    const lines = ['Orange', 'Brown', 'Red', 'Blue', 'Green', 'Purple', 'Yellow']

    return (
        <div>
            Origin
            <select>
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
