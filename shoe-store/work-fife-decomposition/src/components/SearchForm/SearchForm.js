import React from 'react';
import './SearchForm.css';

// Поисковая строка
export const SearchForm = ({ value, onChange, onSubmit, className }) => {
 return (
   <form className={className + ' search-form'} onSubmit={onSubmit}>
     <input
       className='search-input'
       name='request'
       type='text'
       onChange={(evt) => onChange(evt.target.value)}>
     </input>
     <img className='search-keyboard' src='' alt=''/>
     <button type='submit'>{'Найти'}</button>
   </form>
 );
}

