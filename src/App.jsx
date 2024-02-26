import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import AddTrip from './pages/AddTrip/AddTrip'
import Trips from './pages/Trips/Trips'
import Stops from './pages/Stops/Stops'
import { createTrip, getTrips, deleteTrip, updateTrip } from './services/tripService'
import { TripDetails } from './components/TripDetails/TripDetails'
import EditTrip from './pages/EditTrip/EditTrip'
import { getStops } from './services/stopService'


const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [trips, setTrips] = useState([])
  const [stops, setStops] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    getTrips()
    .then(trips => setTrips(trips))
    getStops()
    .then(stops => setStops(stops))
  }, [])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }
  
  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  // function to handle creating a trip
  const handleCreateTrip = tripData => {
    createTrip(tripData)
    .then(newTripData => {
      setTrips([...trips, newTripData])
    })
  }

  // function to handle deleting a trip
  const handleDeleteTrip = id => {
    //make API call to delete trip
    deleteTrip(id)
    // update state to reflect deleted trip
    .then(deletedTrip => {
      console.log()
      setTrips(trips.filter(trip => trip._id !== id))
    })
  }

  const handleUpdateTrip = tripData => {
    updateTrip(tripData)
    .then(updatedTripData => {
      const newTripArray = trips.map(trip => trip._id === updatedTripData._id ? updatedTripData : trip)
      setTrips(newTripArray)
    })
  }

  return (
    <>
    <div id="page-container">
      <div id="content-wrap">
      <NavBar user={user} handleLogout={handleLogout} className="header" />
      <Routes>
        <Route path="/" element={<Landing className="landing" user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin}/> : <Navigate to="/login" />}
        />
        <Route path="/addTrip" element={<AddTrip handleCreateTrip={handleCreateTrip} />} />
        <Route path="/trips" element={user ? 
          <Trips user={user} trips={trips} handleDeleteTrip={handleDeleteTrip} /> : 
          <Navigate to="/login" />} 
        />
        <Route path="/stops" element={user ? 
          <Stops user={user} stops={stops}/> : 
          <Navigate to="/login" />} 
        />
        <Route path="/:tripDetails" element={<TripDetails user={user} />} />
        <Route path="/editTrip" element={<EditTrip handleUpdateTrip={handleUpdateTrip}  />} />
      </Routes>
      </div>
      <div id="footer">&copy; uCommute 2024</div>
      </div>
    </>
  )
}

export default App
