import React, {Component} from 'react';
import Product from '../product/Product';

class Dashboard extends Component{
   constructor(props){
      super(props)

      this.state = {
         //placeHolder: ""
      }
   }

   render(){
      return (
         <div className="Dashboard">
            Dashboard.js
            <Product />
         </div>
      )
   }

}

export default Dashboard;