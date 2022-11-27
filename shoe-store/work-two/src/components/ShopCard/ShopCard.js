import React from 'react';
import './ShopCard.css';

const ShopCard = (props) => {
  const { name, price, color, img } = props.product;
  return (
    <div className='product'>
      <h2 className='product_title'>{name}</h2>
        <span className='product_color'>{color}</span>
        <img src={img} alt={name} />
        <div className='product_line'>
          <span className='product_price'>${price}</span>
          <button className='product_btn'>Add to cart</button>
        </div>
      </div>
    );
};

export default ShopCard;
