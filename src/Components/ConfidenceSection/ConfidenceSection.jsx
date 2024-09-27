import React, { useEffect, useRef } from 'react';
import './ConfidenceSection.css';

const ConfidenceSection = () => {
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const sectionRef = useRef(null);

  // Function to handle number animation
  const animateValue = (ref, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      ref.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString();
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Trigger number animations when section comes into view
          animateValue(counter1Ref.current, 0, 150, 2000);
          animateValue(counter2Ref.current, 0, 254000, 2000);
          animateValue(counter3Ref.current, 0, 1, 2000);
          observer.unobserve(sectionRef.current); // Unobserve once the animation is triggered
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="confidence-section" ref={sectionRef}>
      <h2 className="confidence-title">
        We Raise Your <span className="highlight">Confidence</span>
      </h2>
      <hr />
      <div className="confidence-counters">
        <div className="counter">
          <span ref={counter1Ref}>0</span>
          <p>EXPERT TRAINERS</p>
        </div>
        <div className="counter">
          <span ref={counter2Ref}>0</span>
          <p>HAPPY CLIENTS</p>
        </div>
        <div className="counter">
          <span ref={counter3Ref}>0</span>
          <p>YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceSection;
