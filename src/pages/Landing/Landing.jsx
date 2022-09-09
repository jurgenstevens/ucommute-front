// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className="landing">
      {user ? 
      <h1>Start your commute, {user.name}!</h1>
      : 
      <div>
      <h1>
        uCommute
        <br/> 
        Please log in or sign up to start your commute.
      </h1>
      <img src="/gifs/ctaelboardoftrade.gif" alt="cta train loop" />
      </div>
      }
    </main>
  )
}

export default Landing
