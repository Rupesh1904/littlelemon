import React from 'react'
import image from './restaurantfood.jpeg';
import './Herosection.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
        <div className='About-little'>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>Welcome to little lemon,<br/> the new resturant in your town with most affordable rates<br/>
                and delicious food on the table.
            </p>
            <br/>
            <Link to="/Reservation" className='Reserve-table-button'>
                Reserve a Table
            </Link>
        </div>
        <div className='About-image'>
        <img src={image} width="250" height="300" alt='' style={{borderRadius:75/2}} ></img>
        </div>
    </div>
  )
}

export default HeroSection