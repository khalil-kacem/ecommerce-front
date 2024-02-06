import React from 'react'
import { collections } from '../data'
import Item from './Item'
import './Newcollection.css'
const Newcollection = () => {
  return (
    <div className='Newcollection'>
        <h1>NEW COLLECTION</h1>
        <hr/>
        <div className='collection'>
            {collections.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} img={item.img} newprice={item.newprice} oldprice={item.oldprice}/>
            })}
        
        </div>      
    </div>
  )
}

export default Newcollection
