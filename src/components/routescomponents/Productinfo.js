import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../../products';
import Allproducts from './Allproducts';
import { Circles } from "react-loader-spinner";
import { useDispatch } from 'react-redux';
import {actioncreators} from '../../state/index.js'
import {useSelector} from 'react-redux'



export default function ProductInfo() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id, 10));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const dispatch = useDispatch();
  const amount = useSelector(state=>state.amount)

  if (!product) {
    return <div>Error 404 <br></br> Not Found</div>;
  }
  
 
  
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % product.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + product.images.length) % product.images.length
    );
  };

  const handleaddtocart = ()=> { 
    setIsAddedToCart(true);
    dispatch(actioncreators.addToCart(product.price));
    }

    const handleremove = () => {
      if (amount >= product.price) {
        dispatch(actioncreators.remove(product.price));
      } else {
        setIsAddedToCart(false);
      }
    };
    

  return (
    <>
    <div className='productdetailedview'>
      
        <div className='image-slider'>
          <button className='image-toggle-btn-prev' onClick={handlePrevImage}>
            &#11164;
          </button>
          {!imageLoaded && (
                  <Circles
                    height='20'
                    width='20'
                    color='grey'
                    ariaLabel='circles-loading'
                    wrapperStyle={{}}
                    wrapperClass='spinner'
                    visible={true}
                  />
                )}
          <img
             onLoad={handleImageLoad}
            src={product.images[currentImageIndex]}
            alt={` ${currentImageIndex + 1}`}
          />

          <button className='image-toggle-btn-next' onClick={handleNextImage}>
            &#11166;
          </button>
        </div>
      <div className='details'>
      <h3>{product.title}</h3>
      <p className='description'>Description: {product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Discount:  {Math.ceil(product.discountPercentage)}% Off..! </p>
      <h6>Only {Math.ceil(product.stock)} Left In Stock..!</h6>
      <div className='carthandler' style={{display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
      <button onClick={handleaddtocart} style={{width:'25%', backgroundColor:'orange', border:'none'}} >Add to Cart </button>
      <button onClick={handleremove} style={{ display: isAddedToCart ? 'block' : 'none', width:'15%', color:'white', backgroundColor:'red', border:'none'}} > Remove - </button>
      </div>
      </div>
    </div>

    <Allproducts/>
   </>
  );
}
