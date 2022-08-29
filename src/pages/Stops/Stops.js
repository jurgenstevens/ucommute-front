import React, { useState } from 'react';
import Select from 'react-select';

function Stops(props) {
  // All of the stops from App.jsx state to map through
  const stops = props.stops.map((stop) => {
    return {
      label: stop.stop_name,
      value: stop.station_descriptive_name,
      key: stop.map_id
    }
  })
  // State for the currently selected station
  const [selectedStop, setSelectedStop] = useState(null)
  
  // Map through each station and return object with value, label and key as object to render each station using react-select Select component. Ref: https://stackoverflow.com/questions/55173409/generate-options-by-mapping-over-array-of-objects-with-react-select
  
  return (
    <>
        <h1>Hello from Stops</h1>
        <Select
          defaultValue={selectedStop}
          onChange={setSelectedStop}
          options={stops}
        />
    </>
  )
}

export default Stops