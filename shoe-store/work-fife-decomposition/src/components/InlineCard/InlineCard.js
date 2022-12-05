import React from 'react';
import {Card} from '../Card/Card';
import './InlineCard.css';

// Карточка в виде строки
export const InlineCard = (props) => {
  return (
      <Card {...props} className='inline-card'/>
  );
}
