import React from 'react';
import { useParams } from 'react-router-dom';
import Manager1 from "../asserts/images.jpg";
import Manager2 from "../asserts/yt.jpg";
import Manager3 from "../asserts/gallery2.jpg";
import './ProductDetail.css';
import Footer from './footer';
const productData = [
    { id: 1, image: Manager1, heading: "Independent Product 1", text: "kwoza pure Delight", price: "UGX 1000", rating: 4 },
    { id: 2, image: Manager2, heading: "Independent Product 2", text: "Kwoza Soft Serenade.", price: "UGX 1000", rating: 5 },
    { id: 3, image: Manager3, heading: "Independent Product 3", text: "Kwoza multiclean.", price: "UGX 1000", rating: 3 },
    { id: 4, image: Manager1, heading: "Independent Product 1", text: "kwoza pure Delight", price: "UGX 1000", rating: 4 },
    { id: 5, image: Manager2, heading: "Independent Product 2", text: "Kwoza Soft Serenade.", price: "UGX 1000", rating: 5 },
    { id: 6, image: Manager3, heading: "Independent Product 3", text: "Kwoza multiclean.", price: "UGX 1000", rating: 3 },
   
];

function ProductDetail() {
    const { id } = useParams();
    const product = productData.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product-detail">
            <div className="product-container">
                <div className="product-image">
                    <img src={product.image} alt={product.heading} />
                </div>
                <div className="product-info">
                    <h2>{product.heading}</h2>
                    <p>{product.text}</p>
                    <p className="product-price">{product.price}</p>
                    <div className="product-rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <span key={index} className={index < product.rating ? 'filled' : ''}>★</span>
                        ))}
                    </div>
                    <button className="order-button">Order Now</button>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
            
    );
  
}

export default ProductDetail;