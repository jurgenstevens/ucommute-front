// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className="landing">
      {user ? 
      <div className="loggedInLanding">
        <img src="/images/ctabluelineohare01.jpeg" alt="cta-train" />
        <br/>
        <h1 id="landingHeader">Start your commute, {user.name}!</h1>

      </div>
      : 
      <div>
      <div className="landingImgBox">
        <img src="/images/ctamaptransparent.png" alt="cta train loop" id="landingImg" />
      </div>
      <div className="landinglogo">
        <h1 id="landingHeader"> uCommute <img src="/images/ucommutelogo.png" alt="cta-logo" className="ucommuteLogo"/>
        </h1>
      </div>
      </div>
      }
    </main>
  )
}

export default Landing
