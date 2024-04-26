// import React from 'react'

// function Home() {
//   return (
//     <div>homepage</div>
//   )
// }

// export default Home;

import React from 'react'
import "./homepage.css"
// import home from "../../Assets/home.png"
// import lock from "../../Assets/lock.png"

function Home() {
  return (
    <div className='home'>
      {/* <img src={home} alt="home" /> */}
      <h1>Pocket Notes</h1>
      <p>Send and receive messages without keeping your phone online.<br/>Use Pocket Notes on up to 4 linked Devices and 1 mobile phone.</p>
      <div className="home_bottom">
        {/* <img src={lock} alt="lock" /> */}
        <span>end-to-end encrypted</span>
      </div>
    </div>
  )
}

export default Home;