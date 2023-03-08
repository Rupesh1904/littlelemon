import React, { useState } from 'react';
import image from './restaurantfood.jpeg';
import './Herosection.css';
import { Link } from 'react-router-dom';
import BookingForm from './BookingForm';

function HeroSection() {
  const [showForm, setShowForm] = useState(false);

  const handleReserveTableClick = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='hero-container'>
      <div className='About-little'>
  <div className='text-container'>
    <h1>Little Lemon</h1>
    <h2>Chicago</h2>
    <p>
      Welcome to little lemon,
      <br /> the new resturant in your town with most affordable rates
      <br /> and delicious food on the table.
    </p>
    <br />
    <button
      className='Reserve-table-button'
      onClick={handleReserveTableClick}
    >
      Reserve a Table
    </button>
  </div>
  {showForm && <BookingForm isVisible={showForm} setIsVisible={setShowForm} />}
</div>
      <div className='About-image'>
        <img
          src={image}
          width='250'
          height='300'
          alt=''
          style={{ borderRadius: 75 / 2 }}
        ></img>
      </div>
    </div>
  );
}

export default HeroSection;