import React from 'react';
import './ServicesComponent.css';
import sup from '../Assets/sup.jpg'
import diet from '../Assets/diet.jpg'
import wk from '../Assets/wk1.jpg'
import wk1 from '../Assets/wk1.jpg'
import wk2 from '../Assets/wk2.jpg'
const ServicesComponent = () => {
  return (
    <div className="services-section">
      <h2 className="section-title">
        We Provide You <span className="highlight">Best Services</span>
      </h2>
      <div className="services-grid">
        <div className="service-card dietician">
          <h3>Dietician</h3>
          <img src={diet} alt="Dietician" />
        </div>

        <div className="service-card gym">
          <h3>Gym Membership</h3>
          <img src={wk} alt="Gym Membership" />
        </div>

        <div className="service-card clothing">
          <h3>Clothing</h3>
          <img src={wk1} alt="Clothing" />
        </div>

        <div className="service-card supplements">
          <h3>Supplements</h3>
          <img src={sup} alt="Supplements" />
        </div>

        <div className="service-card workout">
          <h3>Workout Plan</h3>
          <img src={wk2} alt="Workout Plan" />
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
