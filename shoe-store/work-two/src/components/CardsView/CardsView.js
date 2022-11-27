import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './CardsView.css';

const CardsView = ({products}) => {
    return (
        <div className='products-list card'>
            {products.map((product, index) => (
                <ShopCard product={product} key={index} />
            ))}
        </div>
    );
};


export default CardsView;
