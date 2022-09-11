// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className="landing">
      {user ? 
      <h1>Start your commute, {user.name}!</h1>
      : 
      <div>
      <div class="landingImgBox">
        <img src="/images/ctaredwide.jpeg" alt="cta train loop" id="landingImg" />
      </div>
      <h1 id="landingHeader">uCommute</h1>
      </div>
      }
    </main>
  )
}

export default Landing
