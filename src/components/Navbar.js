import React from 'react'
import './Navbar.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const Navbar = () => {
  return (
    <div className='Container'>
        <div className='wrapper'>
            <div className='left'>
            <div class="search">
                <input type="text" class="searchTerm" placeholder="What are you looking for?"/>
            <button type="submit" class="searchButton">
             <i class="fa fa-search"></i>
            </button>
            </div>
            </div>
            <div className='center'>
                <h1>3-TAG</h1>
            </div>
            <div className='right'>
            <div class="cart-container ">
              <div className='reg'>
              <h4 class='menu-items'>Register </h4>
              </div>
              <div className='sign'>
            <h4 class='menu-items'>Sign in</h4>
            </div>
            <div class="cart-icon menu-items">
             <i class="fas fa-shopping-cart"></i>
            </div>
             <div class="badge " id="cart-badge">0</div>
            </div>
            
            </div>
        </div>
    </div>
  )
}

export default Navbar
