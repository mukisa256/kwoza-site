import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './GoodsStyle.css';

function GoodsData(props) {
    return (
        <div className="t-cards">
            <Link to={`/product/${props.id}`}>
                <div className="t-image">
                    <img alt="image" src={props.image} />
                </div>
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
                <div className="goods-details">
                    <span className="goods-price">{props.price}</span>
                    <span className="goods-rating">
                        {Array.from({ length: 5 }, (_, index) => (
                            <FontAwesomeIcon 
                                key={index} 
                                icon={faStar} 
                                className={index < props.rating ? 'filled' : ''} 
                            />
                        ))}
                    </span>
                </div>
            </Link>
        </div>
    );
}

GoodsData.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};

export default GoodsData;