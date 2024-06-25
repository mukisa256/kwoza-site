import React, { useState, useEffect } from 'react';
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";
import "./HomeSliderStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const HomeSlider = () => {
  const products = [
    {
      id: 1,
      image: Manager1,
      name: 'Product 1',
      description: 'Description 1',
      price: 'UGX 29.99',
      rating: 4
    },
    {
      id: 2,
      image: Manager2,
      name: 'Product 2',
      description: 'Description 2',
      price: 'UGX 39.99',
      rating: 5
    },
    {
      id: 3,
      image: Manager3,
      name: 'Product 3',
      description: 'Description 3',
      price: 'UGX 19.99',
      rating: 3
    },
    {
      id: 4,
      image: Manager3,
      name: 'Product 4',
      description: 'Description 4',
      price: 'UGX 49.99',
      rating: 4
    },
    {
      id: 5,
      image: Manager3,
      name: 'Product 5',
      description: 'Description 5',
      price: 'UGX 59.99',
      rating: 5
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [products.length]);

  return (
    <div className="slider">
      <h2>Recent Products</h2>
      <div className="Slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {products.map((product) => (
          <div key={product.id} className="slide1">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div className="price">{product.price}</div>
            <div className="rating">
              {[...Array(5)].map((star, i) => (
                <FontAwesomeIcon 
                  key={i} 
                  icon={faStar} 
                  className={i < product.rating ? 'star-filled' : 'star-empty'}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;