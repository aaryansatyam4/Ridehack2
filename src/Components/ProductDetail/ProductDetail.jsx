import React, { useState } from 'react';
import AR from '../ArTry/ArTry'; // Import the AR component
import './ProductDetail.css'; // Ensure this CSS file exists for styling

const ProductDetail = ({ product, onBack }) => {
  const [showAR, setShowAR] = useState(false); // State to control AR visibility

  // Toggle the AR feature visibility
  const handleTryItOn = () => {
    setShowAR(!showAR); // Toggle AR visibility
  };

  return (
    <div className="product-detail">
      <button className="back-button" onClick={onBack}>Back to Shop</button>

      <div className="product-detail-content">
        {/* Product Image */}
        <img className="product-image" src={product.image} alt={product.name} />

        {/* Product Information */}
        <div className="product-info">
          <h2>{product.name}</h2>
          <p>Category: {product.category}</p>
          <p>{product.new_price} ₹ <span className="old-price">(Old price: {product.old_price} ₹)</span></p>
          <p>{product.description || 'No description available'}</p>

          {/* Buttons for Buy, Cart, and Try It On */}
          <div className="product-actions">
            <button className="buy-button">Buy Now</button>
            <button className="cart-button">Add to Cart</button>
            <button className="try-button" onClick={handleTryItOn}>
              {showAR ? 'Close AR' : 'Try It On'}
            </button> {/* New Try It On Button */}
          </div>

          {/* Conditionally render AR component */}
          {showAR && (
            <div className="ar-section">
              <AR /> {/* Display AR component here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
