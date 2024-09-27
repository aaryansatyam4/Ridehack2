import React from 'react';
import './Hero1.css';
import vid from '../Assets/hrx.mp4'
const Hero1 = () => {
  return (
    <div className="hero-container">
      <video id="videoBkg" autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>

      <div className="hero-section">
      <h1>You</h1>
<h1>Can</h1>
<h1>Do</h1>
<h1>It</h1>
        {/* <p>
          Need we say more? <br />
          Come to <strong>BEAST</strong> and be the best of your version.
        </p>

        <button>See our deals</button> */}
      </div>
    </div>
  );
};

export default Hero1;

