import React, {Component} from 'react';

import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';

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

           <Dashboard />
           <Form />
           <Header />

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
