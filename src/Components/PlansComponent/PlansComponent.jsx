import React from 'react';
import './PlansComponent.css';
import plansImage from '../Assets/wk1.jpg'; // Replace with your image

const PlansComponent = () => {
  return (
    <div className="plans-section">
      <div className="plans-container">
        {/* Image Section */}
        <div className="plans-image">
          <img src={plansImage} alt="Plans" />
        </div>

        {/* Content Section */}
        <div className="plans-content">
          <h2>B.E.A.S.T Experience Subscription Plans</h2>
          <p>
            Discover a world of fitness and wellness at your fingertips. Our customizable B.E.A.S.T subscription model offers everything from gym memberships, dietician consultations, supplements, and personalized workout plans. Choose a plan that fits your goals and save with exclusive discounts.
          </p>
          <button className="plans-button">Our Plans</button>
        </div>
      </div>
    </div>
  );
};

export default PlansComponent;
