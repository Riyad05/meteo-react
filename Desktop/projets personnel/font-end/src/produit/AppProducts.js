import React from 'react'
import {ListProducts} from './data'
import ProductsList from './ProductsList.jsx'
import './style/appProducts.css'

const AppProducts = () => {

    const totalPrice = ListProducts.reduce((acc, item) => acc + item.price, 0)
  return (
      <div className='app'>
          <h1 className='title'>
              list of Products
          </h1>
          <ProductsList listProducts={ListProducts} />
          
          <h2 className='title'>Number of Products: {ListProducts.length} / Total price of all products : { totalPrice } DHS</h2>
          
          {/* <h2 className='title'>Number of Products: { data.length }</h2> */}
    </div>
  )
}

export default AppProducts