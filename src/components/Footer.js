import React from 'react'
import './Footer.css'
import footlogo from '../shopping.jpeg'
import insta from '../socialmedia/insta.jpeg'
import fb from '../socialmedia/fb.jpeg'
import tiktok from '../socialmedia/tiktok.jpeg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={footlogo}/>
            <p>3TAG</p>
        </div>
        <ul className='footer-links'>
            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='footer-social-icon'>
            <div className='footer-icons-container'>
                <img src={insta}/>
            </div>
            <div className='footer-icons-container'>
                <img src={fb}/>
            </div>
            <div className='footer-icons-container'>
                <img src={tiktok}/>
            </div>
        </div>
        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @ 2024 - All Right Reserved. </p>
        </div>



    </div>
  )
}

export default Footer
