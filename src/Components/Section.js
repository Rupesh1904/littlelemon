import React from 'react'
import './Section.css'
import { Link } from 'react-router-dom';

function Section() {
  return (
    <div className='Section-container'>
        <div className='special-message'>
            <h1>This Week's Specials !!</h1>
        </div>
        <div>
          <Link
            to="/online-Menu"
            className='Menu-Button'
            style={{textDecoration: 'none'}}
            >
              Online Menu
          </Link>
        </div>
    </div>
  )
}

export default Section