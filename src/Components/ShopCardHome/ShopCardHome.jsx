import React from 'react';
import './ShopCardHome.css';
import wk from '../Assets/wk1.jpg'
import sup from '../Assets/sup.jpg'
const ShopCardHome = () => {
  return (
    <div className="shop-cards-container">
      {/* Card for Buy Clothes */}
      <div className="shop-card-home">
        <img src={wk} alt="Buy Clothes" className="card-image" />
        <div className="card-text">
          <a href="/clothing">Buy Clothes</a>
        </div>
      </div>

      {/* Card for Buy Supplements */}
      <div className="shop-card-home">
        <img src={sup} alt="Buy Supplements" className="card-image" />
        <div className="card-text">
          <a href="/supplements">Buy Supplements</a>
        </div>
      </div>
    </div>
  );
};

export default ShopCardHome;
