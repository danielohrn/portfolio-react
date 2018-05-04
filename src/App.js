import React, { Component } from 'react';
import { 
  Link, 
  Redirect, 
  Switch, 
  Route 
} from 'react-router-dom'; 

import './App.css';
import routes from './routes'; 
import PageArrow from './components/PageArrow'; 
import MainNav from './components/MainNav'; 
import Eagle from './components/Eagle'; 
import Canvas from './components/Canvas'; 

class App extends Component {

  render() {
    const pageRoutes = routes.map(route => (
      <Route path={route.path} 
             exact={route.exact} 
             component={route.component} 
             key={route.name}
      />
    ))

    return (
      <div className="App">
        <main>
          {pageRoutes}
          <Route path='/' component={Eagle}/>
          {/* <MainNav/> */}
        </main>
        <Canvas/>
      </div>
    );
  }
}



export default App;
