import React, {Component} from 'react';
import './form.css'

class Form extends Component{
   constructor(props){
      super(props)

      this.state = {
        name: "",
        price: "",
        imgurl: ""
      }
   }

   handleNameChange(){

   };

   handlePriceChange(){

   };

   handleImgurlChange(){

   };






   render(){
      return (
         <div className="Form">
            Form.js
            <div>
               {/* <img src = "https://user-images.githubusercontent.com/101482/29592647-40da86ca-875a-11e7-8bc3-941700b0a323.png"/> */}

               <div>
                  <div>Image URL:</div>
                  <input />
               </div>

               <div>
                  <div>Product Name:</div>
                  <input />
               </div>

               <div>
                  <div>Price:</div>
                  <input />
               </div>

            </div>

            <div >
               <button className="formButton">Cancel</button>
               <button className="formButton">Add to Inventory</button>
            </div>

         </div>
      )
   }

}

export default Form;