import React from 'react'
import './Item.css'
const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.img} />
        <p>{props.name}</p>
      <div className='item-prices'>
        <div className='item-price-new'>
            ${props.newprice}
        </div>
        <div className='item-price-old'>
            ${props.oldprice}
        </div>
      </div>
    </div>
  )
}

export default Item
