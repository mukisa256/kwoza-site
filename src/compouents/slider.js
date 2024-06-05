import React, { useState, useEffect } from 'react';
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";
import "./SliderStyle.css"

const Slider = () => {
    
  const products = [
    {
      id: 1,
      image: Manager1,
      name: 'Product 1',
      description: 'Description 1'
    },
    {
      id: 2,
      image: Manager2,
      name: 'Product 2',
      description: 'Description 2'
    },
    {
      id: 3,
      image: Manager3,
      name: 'Product 3',
      description: 'Description 3'
    },
    {
      id: 4,
      image: Manager3,
      name: 'Product 3',
      description: 'Description 3'
    },
    {
      id: 5,
      image: Manager3,
      name: 'Product 3',
      description: 'Description 3'
    }
   
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
