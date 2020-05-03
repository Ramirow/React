import React from 'react';
import classes from './ProductPreview.module.css'; 

const ProductPreview = (props) => {
  const currentHours = new Date().getHours() > 9 ? new Date().getHours():'0' + new Date().getHours();
  const currentMinutes = new Date().getMinutes() > 9 ? new Date().getMinutes():'0' + new Date().getMinutes(); 
  const Time = 
  <div className={classes.TimeSection}>
   <p>{`${currentHours}:${currentMinutes}` }</p>
  </div> ;
  const Heart = <div className={classes.HeartBeatSection}>
  <i class = "fas fa-heartbeat"> </i>
  <p>78</p>
  </div>;
   

return (
<div className = {classes.ProductPreview}>
         
       <img  src = {props.currentImage} alt = "Product Preview"></img> 
       {props.position === 0?Time:Heart}
        
              
      </div>


);
}

export default ProductPreview;