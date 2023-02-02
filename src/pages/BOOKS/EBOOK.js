import React from 'react';
import {Link} from 'react-router-dom';
import {products} from './products';
import ProductDetails from './ProductDetails';
import '../BOOKS/ebook.css';


const EBOOK = ({ imgage,name, match }) => {
    const share = () => {
      window.alert('The product has been shared!');
    }
  
    const onNotify = () => {
      window.alert('You will be notified when the product goes on sale');
    }
  
    return (
        
      <div className="product-list">
        
  
        {products.map((product, index) => {
          return (
            <div>
              <h3>
                <Link to={`${match.url}products/${index}`} title={`${product.name} details`}> 
                   {product.name}
                   <img src={product.img}></img>
                   <h3 className='price ms-5'>{product.price}.00£</h3>
                   
                  
                  
                </Link>
              </h3>
              {product.description && <p className='desciption' style={{fontSize:'1.4em',marginRight:'10em',marginLeft:'-0.6em'}}>{` ${product.description}`}</p>}
              <button onClick={share}>
                Share
              </button>
            
            </div>
          )
        })}
      </div>
    )
  };
  
  export default EBOOK;
