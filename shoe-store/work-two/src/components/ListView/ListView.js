import React from 'react';
import ShopCard from '../ShopCard/ShopCard';
import './ListView.css';

const ListView = ({products}) => {
    return (
        <div className='products-list list'>
            {products.map((product, index) => (
                <ShopCard product={product} key={index} />
            ))}
        </div>
    );
};

export default ListView;
