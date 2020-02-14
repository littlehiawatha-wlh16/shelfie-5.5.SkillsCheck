import React, {Component} from 'react';

import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';


import './App.css';



class App extends Component{
  constructor(props){
     super(props)

     this.state = {
        inventory: []
     }
  }

  render(){
     return (
        
        <div className="App">
           
           App.js

           <Header />
           <section className='mainContent'>
            <Dashboard />
            <Form />
           </section >

        </div>
     )
  }

}

export default App;

// // -----------------> Changed from functional to stateful component above <-----
// function App() {
//   return (
//     <div className="App">

//     <Dashboard />
//     <Form />
//     <Header />
          
//     </div>
//   );
// }

// export default App;
