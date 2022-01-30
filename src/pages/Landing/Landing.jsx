import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      {user ? 
      <h1>Welcome back to uCommute, {user.name}!
          <br/>
          Let's get your commute started.
      </h1>
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
