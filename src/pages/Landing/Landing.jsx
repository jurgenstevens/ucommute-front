// import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className="landing">
      {user ? 
      <h1>Start your commute, {user.name}!</h1>
      : 
      <div>
      <div className="landingImgBox">
        <img src="/images/ctamaptransparent.png" alt="cta train loop" id="landingImg" />
      </div>
      <div className="landinglogo">
        <img src="/images/ucommutelogo.png" alt="cta-logo" className="ucommuteLogo"/>
        <h1 id="landingHeader"> uCommute</h1>
      </div>
      </div>
      }
    </main>
  )
}

export default Landing
