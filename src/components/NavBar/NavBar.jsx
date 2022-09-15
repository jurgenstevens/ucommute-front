import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav className='navbar-list'>
          <ul>
            <li className='navbar-links btn btn-outline-primary'><Link to="/stops">Arrival Times</Link></li>
            <li className='navbar-links btn btn-outline-primary'><Link to="/addTrip">Create Trip</Link></li>
            <li className='navbar-links btn btn-outline-primary'><Link to="/trips">Trip List</Link></li>
            <li className='navbar-links btn btn-outline-primary'><Link to="/changePassword">Change Password</Link></li>
            <li className='navbar-links btn btn-outline-primary'><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav className='auth-navbar'>
          <ul>
            <li className='navbar-links btn btn-outline-primary'><Link to="/login">Log In</Link></li>
            <li className='navbar-links btn btn-outline-primary'><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
