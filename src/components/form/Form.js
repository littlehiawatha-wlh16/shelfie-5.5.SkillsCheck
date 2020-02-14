import React, {Component} from 'react';

class Form extends Component{
   constructor(props){
      super(props)

      this.state = {
        name: "",
        price: "",
        imgurl: ""
      }
   }

   render(){
      return (
         <div className="Form">
            Form.js
         </div>
      )
   }

}

export default Form;