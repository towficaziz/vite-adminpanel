import React from 'react'
import "./product.scss";
import Single from '../../components/single/Single';

const Product = () => {

  //Fetch daata and send to Single Component
  return (
    <div className='product'>
      <Single />
    </div>
  )
}

export default Product
