import React, { Component }  from 'react';
import classes from './ProductData.module.css';

const ProductDetails = (props) =>  {
 const  colorOptions = props.colorOptions.map((item,pos) => {
  const classArr = [classes.ProductImage];
  if (props.colorOptions[pos].imgUrl === props.currentImage) {
    classArr.push([classes.SelectedProductImage]);
  }
  return (
    <img  key = {pos} className = {classArr.join(' ')} src = {item.imgUrl} alt = {item.styleName} 
    onClick = {() => props.OnClickImage(pos)} />
     )
});  

   const featureLists = props.featureLists.map((item,pos)=> {
    const Arr = [classes.FeatureItem];
    if (pos === 0){

      Arr.push([classes.SelectedFeatureItem])
    }
    return (
    <button onClick = {(() => props.ButtonClick(pos))} className = {Arr.join(' ')}>{item}</button>
    );
    });

    
   
  
    return (
        <div class = {classes.ProductData}>
        <h1 class = {classes.ProductTitle}> {props.title} </h1>
        <p class = {classes.ProductDescription}>{props.desc} </p>
        <h3 className = {classes.SectionHeading}>Select Color </h3>
        <div>
        {colorOptions} 
        </div>
        <h3 className = {classes.SectionHeading}>Features </h3>
        <div> 
        {/* <button className = {[classes.FeatureItem,classes.SelectedFeatureItem].join(' ')}>Time</button>
        <button className = {classes.FeatureItem}>Heart Rate</button>  */}
        {featureLists}
      </div>
      <button className={classes.PrimaryButton}>Buy Now</button> 
    </div>
    
    

    );
}


export default ProductDetails;