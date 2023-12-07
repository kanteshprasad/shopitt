import React,  { useState } from "react";
import { Circles } from 'react-loader-spinner'
import { Link } from 'react-router-dom'

function Card(props) {
    const [imageLoaded, setImageLoaded] = useState(false);
   

    const handleImageLoad = () => {
        setImageLoaded(true);
    };
 
  
    
   
    return (
        <>
        <div className="cardContainer">
            {!imageLoaded && (
                <Circles
                    height="20"
                    width="20"
                    color="grey"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass="spinner"
                    visible={true}
                />
            )}

            <img
                onLoad={handleImageLoad}
                style={{ width: '100%', height: "250px", marginBottom: "25px", objectFit: 'contain' }}
                src={props.imageUrl}
                className="card-img-top"
                alt={props.title}
                
            />

            <div className="card-title">
                <h5>
                    {props.title.length > 40
                        ? `${props.title.slice(0, 40)}...`
                        : props.title}
                </h5>

                <h6 className="discount">
                    {Math.ceil(props.discount)}% Off..!
                </h6>
            </div>

            <p className="card-text mx-3">
                {props.description.length > 70
                    ? `${props.description.slice(0, 70)}...`
                    : props.description}
            </p>
            <h4 className="strikethrough mx-3" >
                $ {props.price}
            </h4>

            <div className="mx-3 offer">
                <p className=" getit">
                    Now get it for Only
                </p>
                <h3 className="priceinfo">
                    $ {Math.ceil(
                        props.price - (props.discount / 100) * props.price
                    )}
                </h3>
            </div>
         
            <Link to={`/prdouctinfo/${props.id}`} className="btn moreinfo">
                More Info  &rarr;
            </Link>
        
             
          
        </div>
    
       
     </>
       
    );
}

export default Card;


