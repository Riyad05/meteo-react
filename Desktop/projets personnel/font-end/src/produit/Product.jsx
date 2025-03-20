import React from 'react'
import './style/product.css'

const Product = (props) => {
    
    const { id, image, title, description, price } = props.product; 
    const handleProduct = () => {
        alert(`${title} (${price}) DH a été ajouter au panier`);
    }
  return (
      <div className='product-item'>
          <img src={image} alt={title} />
          <h3>{title}</h3>
          <p>{description}</p>
          <h5><strong>{price} DH</strong></h5>
          <button onClick={handleProduct}>Ajouter au panier</button>
    </div>
  )
}

export default Product
