import React , {Component} from  'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
 

class App extends Component   {  
   state = {
    title : 'FitBit 19 - The Smartest Watch',
    description :'Nice Website and cool watches Nice Website and cool watches Nice Website and cool watches',
    colorOptions : [
         {
           styleName : 'Black Strap',
           imgUrl:'https://imgur.com/iOeUBV7.png'
         },
         {
            styleName : 'Red Strap',
            imgUrl:'https://imgur.com/PTgQlim.png'
          },
          {
            styleName : 'Blue Strap',
            imgUrl:'https://imgur.com/Mplj1YR.png'
          },
          {
            styleName : 'Purple Strap',
            imgUrl:'https://imgur.com/xSIK4M8.png'
          },
        ],
        featureList:[
          "Time","Heart Rate"
        ],
        currentimage:'https://imgur.com/iOeUBV7.png',
        position:0
           
        };

        ImageClicked = (pos) => {
        const elem = this.state.colorOptions[pos].imgUrl; 
        this.setState({currentimage:elem}) 
      }
      
      ButtonClicked = (pos) => {
      this.setState({position:pos}) 
      }

      
   
  
  render(){  
  return (
    <div className="App">
    <header className = "App-header"> 
       <nav className = {classes.Topbar}>
         <img src = "data:image/png;base64,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" alt = "Amazon Logo"/>
       </nav>
    </header>
    <div className = {classes.MainContainer}>
      <ProductPreview currentImage = {this.state.currentimage} position = {this.state.position} />
      <ProductDetails title = {this.state.title} desc = {this.state.description}  
      colorOptions = {this.state.colorOptions} featureLists = {this.state.featureList} 
      OnClickImage = {this.ImageClicked} currentImage = {this.state.currentimage}
      ButtonClick = {this.ButtonClicked} />  
      
  </div>
  </div>
  );
}
}


export default App;
