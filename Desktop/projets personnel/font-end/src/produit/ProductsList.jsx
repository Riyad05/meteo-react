import React from 'react';
import Product from './Product';
import './style/listProducts.css'


const ProductsList = (props) => {
    const { listProducts } = props;
  return (
      <div className='product-list'>
          {
              listProducts.map((product, indice) => (
                  <Product product={product} key={product.id} />
            ))
          }
    </div>
  )
}

export default ProductsList