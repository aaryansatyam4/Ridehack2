import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <video id="videoBkg" autoPlay muted loop>
        <source src="https://www.sicontis.com/codepen/cpc-spacing/skiing.mp4" type="video/mp4" />
      </video>

      <div className="hero-section">
      <h1>Eat</h1>
<h1>Sleep</h1>
<h1>Excercise</h1>
<h1>repeat</h1>
        <p>
          Need we say more? <br />
          Come to <strong>BEAST</strong> and be the best of your version.
        </p>

        <button>See our deals</button>
      </div>
    </div>
  );
};

export default Hero;

