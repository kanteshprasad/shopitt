import React, { useState } from "react";
import products from "../../products";
import { Link } from "react-router-dom";
import { Circles } from "react-loader-spinner";


const allproductsList = products

function Allproducts () {
  const handleLinkClick = () => {

    window.scrollTo(0, 0);
   
  };
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
      setImageLoaded(true);
    };
  
    return (
      <>
        <div className='productcontainer'>
          {allproductsList.map(
            (productitem) => (
              <div className='cardContainer'>
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
                  style={{
                    width: "100%",
                    height: "250px",
                    marginBottom: "25px",
                    objectFit: "contain",
                  }}
                  src={productitem.thumbnail}
                  className='card-img-top'
                  alt={productitem.title}
                />
  
                <div className='card-title'>
                  <h5>
                    {productitem.title.length > 40
                      ? `${productitem.title.slice(0, 40)}...`
                      : productitem.title}
                  </h5>
  
                  <h6 className='discount'>
                    {Math.ceil(productitem.discountPercentage)}% Off..!
                  </h6>
                </div>
  
                <p className='card-text mx-3'>
                  {productitem.description.length > 70
                    ? `${productitem.description.slice(0, 70)}...`
                    : productitem.description}
                </p>
                <h4 className='strikethrough mx-3'>$ {productitem.price}</h4>
  
                <div className='mx-3 offer'>
                  <p className=' getit'>Now get it for Only</p>
                  <h3 className='priceinfo'>
                    ${" "}
                    {Math.ceil(
                      productitem.price -
                        (productitem.discountPercentage / 100) * productitem.price
                    )}
                  </h3>
                </div>
  
                <Link
                  to={`/productinfo/${productitem.id}`}
                  onClick={handleLinkClick}
                  className='btn moreinfo'>
                  More Info &rarr;
                </Link>
              </div>
            )
  
        
          )}
        </div>
      </>
    );
}


export default Allproducts