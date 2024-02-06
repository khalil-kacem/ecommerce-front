import React, { useState } from 'react'
import './Slider.css'
import '@fortawesome/fontawesome-free/css/all.css';
import { sliderItems } from '../data';
import { Fade } from 'react-reveal';

const Slider = () => {   

  return (
    <div>
      <div className='Containerr'>
        <div className='Arrowr' direction='right' >
        <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className='wrr' >
            {sliderItems.map(items =>(
            <div className='slide'>
                <div className='imgcont'>
                    <img src={items.img}/>
                </div>
                <div className='infocont'>
                    <h1>{items.title}</h1>
                    <p>{items.desc}</p>
                    <button>Shop Now</button>
                </div>
            </div>
            ))}
        </div>
        <div className='Arrowl' direction='left'>
        <i class="fa-solid fa-arrow-left"></i>
        </div>
      </div>
    </div>


  )
}

export default Slider