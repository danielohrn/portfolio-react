import React, { Component } from 'react';
import { 
  Link, 
  Redirect, 
  Switch, 
  Route 
} from 'react-router-dom'; 

import './App.css';
import routes from './routes'; 
import Toggler from './components/Toggler'; 
import MainNav from './components/MainNav'; 

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
        <MainNav/>
        <main>
          {pageRoutes}
          {/* <Toggler/> */}
        </main>
      </div>
    );
  }
}

export default App;
