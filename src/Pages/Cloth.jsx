import React, { useState } from 'react';
import all_product from '../Components/Assets/All_Product'; // Your product data
import ProductCard from '../Components/ProductCard/ProductCard';
import ProductDetail from '../Components/ProductDetail/ProductDetail';
import Navbar from '../Components/Navbar/Navbar';
import FooterComponent from '../Components/FooterComponent/FooterComponent';
import Hero from '../Components/Hero/Hero';
import './css/Shop.css'; // Ensure this file exists and contains the styles

const Cloth = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = all_product.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleBackToShop = () => {
    setSelectedProduct(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query state with the search input from Navbar
  };

  return (
    <div className="shop-container">
      {/* Navbar with search functionality */}
      <Navbar/>
      <Hero/>

      <h1 className="shop-heading">Our Clothes</h1> {/* Add heading here */}

      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={handleBackToShop} />
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} onClick={handleCardClick} />
          ))}
        </div>
      )}
      
      <FooterComponent/>
    </div>
  );
};

export default Cloth;
