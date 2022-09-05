import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { getStop } from '../../services/stopService';

function Stops(props) {
  // All of the stops from App.jsx state to map through
  const stops = props.stops.map((stop) => {
    return {
      label: stop.stop_name,
      value: stop.station_descriptive_name,
      key: stop.map_id
    }
  })
  const [stopData, setStopData] = useState(null)
	
	function onChange({ key }) {
		console.log(key)
		getStop(key).then(stop => setStopData(stop))
	}
	
	console.log(stopData)

	return (
		<>
			<h1>Select Your Stop To Check Train Arrival Time:</h1>
			<Select
				options={stops}
				onChange={onChange}
				defaultValue={stops[0]}
			/>
			{
      
      stopData ? stopData.ctatt.eta.map((stop) => {
        return <h1>{stop.destNm[0]} </h1>
      })
      : <h1>No Stations</h1>}
    </>
  )
}

export default Stops