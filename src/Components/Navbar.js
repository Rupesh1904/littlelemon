import React,{useState,useEffect} from 'react';
import  {Link} from 'react-router-dom';
import { Button } from './Button';
import  './navbar.css';
function Navbar() {
    const [click, setClick]= useState(false);
    const [button, setButton]= useState(true);
    const handleClick=()=>{
        setClick(!click);
    }
    const closeMobileMenu=()=>{
        setClick(false);
    }
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize',showButton);
  return (
   <>
   <nav className="navbar">
    <div className="navbar-container">
    <Link to="/" className='navbar-logo' onClick={closeMobileMenu} >
        TRVL <i className="fab fa-typo3"/>
    </Link>
        <div className="menu-icon" onClick={handleClick}>
        <i className={click? 'fas fa-times':'fas fa-bars'}/>
        </div>
    <ul className={click?'nav-menu active':'nav-menu'}>
        <li className='nav-item'>
            <Link to ="/" className='nav-links' onClick={closeMobileMenu}>
                Home
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ="/about" className='nav-links' onClick={closeMobileMenu}>
                About
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ="/Menu" className='nav-links' onClick={closeMobileMenu}>
                Menu
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ="/Reservation" className='nav-links' onClick={closeMobileMenu}>
                Reservation
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ="/Order-Online" className='nav-links' onClick={closeMobileMenu}>
                Order Online
            </Link>
        </li>
        <li className='nav-item'>
            <Link to ="/Login" className='nav-links' onClick={closeMobileMenu}>
                Login
            </Link>
        </li>
    </ul>
        {button &&<Button buttonStyle='btn--outline'>Signup</Button>}
    </div>
   </nav>
   </>
  );
}

export default Navbar