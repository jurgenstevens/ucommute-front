// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className="landing">
      {user ? 
      <h1>Start your commute, {user.name}!</h1>
      : 
      <h1>
        Welcome to uCommute! 
        <br/> 
        Please log in or sign up to start your commute.</h1>
      }
    </main>
  )
}

export default Landing
