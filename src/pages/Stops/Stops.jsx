import React, { useState } from 'react';
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
		getStop(key).then(stop => setStopData(stop))
	}
	console.log(stopData)
  let color
	return (
		<>
      <div className="selectAndImage">
        <div className="stopSelect">
          <h1 className='ucommuteHeaderFont'>Type Your Stop For Train Arrival Times:</h1>
          <Select
            options={stops}
            onChange={onChange}
          />
        </div>
        <img src="/images/ctaoharetermarrival.jpeg" alt="train-arrives" className='arrivalImg' />
      </div>
      
      <div className="timeArrivals">
        {stopData ? stopData.ctatt.eta.map((stop, idx) => {
          let timeRemaining = parseInt(stop.arrT[0].slice(10, 17).replace(":", "")) - parseInt(stopData.ctatt.tmst[0].slice(10, 17).replace(":", ""))

          // set conditions accessing each stations rt color to change h1 style
          if(stop.rt[0] === "Blue"){
            color = "#21A1DE"
          }
          if(stop.rt[0] === "Org"){
            color = "#F9461C"
          }
          if(stop.rt[0] === "G"){
            color = "#299B3A"
          }
          if(stop.rt[0] === "Red"){
            color = "#C60C30"
          }
          if(stop.rt[0] === "Pink"){
            color = "#E27EA6"
          }
          if(stop.rt[0] === "Brn"){
            color = "#62361B"
          }
          if(stop.rt[0] === "Y"){
            color = "#F9E301"
          }
          if(stop.rt[0] === "P"){
            color = "#522398"
          }

          if(timeRemaining < 2){
            return <h1 key={idx} style={{color: color}} className="stationTimes">{stop.destNm[0]}: Due</h1>
          }
          if(timeRemaining < 45){
            return <h1 key={idx} style={{color: color}} className="stationTimes">{stop.destNm[0]}: {timeRemaining} min</h1>
          } else {
            return <h1 key={idx} style={{color: color}} className="stationTimes">{stop.destNm[0]}: Not Available</h1> 
          }
        })
        : <h1 style={{color: "#1589FF"}}>No Station Chosen</h1>}
      </div>
    </>
  )
}

export default Stops