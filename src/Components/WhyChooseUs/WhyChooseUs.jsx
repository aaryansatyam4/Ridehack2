import React, { useEffect, useRef } from 'react';
import { FaThumbsUp, FaCheckCircle, FaHeartbeat, FaDumbbell } from 'react-icons/fa'; // Font Awesome Icons
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const cardRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target); // Stop observing after the animation runs once
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });
  }, []);

  return (
    <div className="why-choose-us-container">
      <h2 className="title">Why Choose Us?</h2>
      <div className="content">
        <div className="card" ref={(el) => (cardRef.current[0] = el)}>
          <div className="icon">
            <FaThumbsUp /> {/* Thumbs up icon */}
          </div>
          <div className="text">
            <h3>The Best in World</h3>
            <p>
              Discover a world of fitness at your fingertips. Our website
              features cutting-edge services, personalized workouts, expert
              guidance, and a global community to motivate.
            </p>
          </div>
        </div>

        <div className="card" ref={(el) => (cardRef.current[1] = el)}>
          <div className="icon">
            <FaCheckCircle /> {/* Check circle icon */}
          </div>
          <div className="text">
            <h3>Qualified Instructor</h3>
            <p>
              Experience the best with our world-class fitness instructors. Get
              expert guidance, personalized training, and reach your fitness
              goals efficiently.
            </p>
          </div>
        </div>

        <div className="card" ref={(el) => (cardRef.current[2] = el)}>
          <div className="icon">
            <FaHeartbeat /> {/* Heartbeat icon */}
          </div>
          <div className="text">
            <h3>Health Focused</h3>
            <p>
              We prioritize your health and well-being with fitness programs
              designed to enhance both mental and physical fitness.
            </p>
          </div>
        </div>

        <div className="card" ref={(el) => (cardRef.current[3] = el)}>
          <div className="icon">
            <FaDumbbell /> {/* Dumbbell icon */}
          </div>
          <div className="text">
            <h3>State-of-the-Art Equipment</h3>
            <p>
              Our gyms are equipped with the latest machines and technology to
              help you train better and achieve your goals faster.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
