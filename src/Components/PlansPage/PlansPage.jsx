import React, { useState } from 'react';
import './PlansPage.css';

const serviceOptions = [
  { id: 'basicGym', name: 'Basic Gym Membership', price: 2500 },
  { id: 'premiumGym', name: 'Premium Gym Membership', price: 5000 },
  { id: 'eliteGym', name: 'Elite Gym Membership', price: 7000 },
  { id: 'dietician', name: 'Dietician Plan', price: 2000 },
  { id: 'supplements', name: 'Supplements Plan', price: 3000 },
];

const PlansPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [duration, setDuration] = useState(1); // Default duration in months (1 = monthly)

  // Handle service selection
  const handleSelectService = (e) => {
    const { id, checked } = e.target;
    if (checked) {
      setSelectedServices([...selectedServices, id]);
    } else {
      setSelectedServices(selectedServices.filter(service => service !== id));
    }
  };

  // Handle duration selection (monthly, 3-month, 6-month, 12-month plans)
  const handleSelectDuration = (e) => {
    setDuration(parseInt(e.target.value, 10));
  };

  // Function to calculate total price and apply discounts
  const calculateTotal = () => {
    let total = 0;
    let discount = 0;

    selectedServices.forEach(serviceId => {
      const service = serviceOptions.find(option => option.id === serviceId);
      total += service.price;
    });

    // Apply duration-based discounts
    if (duration === 3) discount = 0.05 * total; // 5% discount for 3 months
    if (duration === 6) discount = 0.1 * total;  // 10% discount for 6 months
    if (duration === 12) discount = 0.15 * total; // 15% discount for 12 months

    return { total, discount, finalTotal: (total - discount) * duration };
  };

  const { total, discount, finalTotal } = calculateTotal();

  return (
    <div className="plans-page">
      {/* Section 1: Introduction */}
      <section className="plans-intro">
        <h1>B.E.A.S.T Subscription Plans</h1>
        <p>Select your desired services, and we'll calculate the best deal for you.</p>
      </section>

      {/* Section 2: Service Selection */}
      <section className="service-selection">
        <h2>Choose Your Services</h2>
        <form className="service-options">
          {serviceOptions.map(service => (
            <div key={service.id} className="service-checkbox">
              <input 
                type="checkbox" 
                id={service.id} 
                onChange={handleSelectService} 
              />
              <label htmlFor={service.id}>{service.name} - ₹{service.price}/month</label>
            </div>
          ))}
        </form>
      </section>

      {/* Section 3: Duration Selection */}
      <section className="duration-selection">
        <h2>Select Subscription Duration</h2>
        <form className="duration-options">
          <div className="duration-radio">
            <input 
              type="radio" 
              id="monthly" 
              name="duration" 
              value="1" 
              checked={duration === 1} 
              onChange={handleSelectDuration}
            />
            <label htmlFor="monthly">Monthly</label>
          </div>
          <div className="duration-radio">
            <input 
              type="radio" 
              id="three-month" 
              name="duration" 
              value="3" 
              onChange={handleSelectDuration} 
            />
            <label htmlFor="three-month">3-Month Plan (5% Discount)</label>
          </div>
          <div className="duration-radio">
            <input 
              type="radio" 
              id="six-month" 
              name="duration" 
              value="6" 
              onChange={handleSelectDuration} 
            />
            <label htmlFor="six-month">6-Month Plan (10% Discount)</label>
          </div>
          <div className="duration-radio">
            <input 
              type="radio" 
              id="twelve-month" 
              name="duration" 
              value="12" 
              onChange={handleSelectDuration} 
            />
            <label htmlFor="twelve-month">12-Month Plan (15% Discount)</label>
          </div>
        </form>
      </section>

      {/* Section 4: Price Calculation */}
      <section className="price-summary">
        <h2>Price Summary</h2>
        <p><strong>Total Price (per month):</strong> ₹{total}</p>
        <p><strong>Discount:</strong> ₹{discount}</p>
        <p><strong>Amount to Pay (for {duration}-month plan):</strong> ₹{finalTotal}</p>
      </section>

      {/* Pay Now Button */}
      <section className="payment-section">
        <button className="pay-now-btn">Pay Now</button>
      </section>
    </div>
  );
};

export default PlansPage;
