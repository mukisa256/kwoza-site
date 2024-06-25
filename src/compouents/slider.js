import React, { useState, useEffect } from 'react';
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";
import "./SliderStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Slider = () => {
    
  const products = [
    {
      id: 1,
      image: Manager1,
      name: 'Product 1',
      description: 'Description 1',
      price: 'UGX 100',
      ratings: 4.5 // Example rating
    },
    {
      id: 2,
      image: Manager2,
      name: 'Product 2',
      description: 'Description 2',
      price: 'UGX 150',
      ratings: 4.0 // Example rating
    },
    {
      id: 3,
      image: Manager3,
      name: 'Product 3',
      description: 'Description 3',
      price: 'UGX 80',
      ratings: 4.2 // Example rating
    },
    // Add more products as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    }, 5000); // Change the time interval here
    return () => clearInterval(intervalId);
  }, [products.length]);

  return (
    <div className="product-slider">
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {products.map((product, index) => (
          <div key={product.id} className="slide">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <div className="ratings">
              <FontAwesomeIcon icon={faStar} className="star-icon" />
              {product.ratings}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;