import React from 'react'
import './Popular.css'
import Item from './Item'
import { categories } from '../data'
const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Men </h1>
      <hr/>
      <div className='popular-item'>
        {categories.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} img={item.img} newprice={item.newprice} oldprice={item.oldprice}/>
        })}

      </div>
    </div>
  )
}

export default Popular
