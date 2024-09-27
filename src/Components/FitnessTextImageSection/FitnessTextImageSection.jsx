import React from 'react';
import './FitnessTextImageSection.css'; // External CSS for styling
import pic from '../Assets/wk1.jpg';
const FitnessTextImageSection = () => {
  return (
    <div className="fitness-section">
      <div className="image-container">
        <img
          src={pic} // Replace with your image path
          alt="Fitness Motivation"
          className="fitness-image"
        />
      </div>
      <div className="text-container">
        <p>
          Where we are dedicated to helping you achieve your fitness goals through our expertise, motivation, mentorship, and top-notch services. Our experienced professionals are committed to providing you with the best fitness experience possible, ensuring that you stay motivated, inspired, and supported throughout your journey. We understand that staying motivated can be tough, which is why we have created a positive and uplifting environment where our dedicated trainers and staff will provide you with the necessary encouragement to keep pushing forward.
        </p>
      </div>
    </div>
  );
};

export default FitnessTextImageSection;
