import React from 'react';
import './ProductCard.css'
const ProductCard = ({ product, onClick }) => {
  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.new_price} ₹</p>
    </div>
  );
};

export default ProductCard;
