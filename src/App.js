import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import routes from "./routes";
import MainNav from "./components/MainNav";
import Eagle from "./components/Eagle";
import Canvas from "./components/Canvas";
import MenuToggler from "./components/MenuToggler";

class App extends Component {
  state = {
    navOpen: false
  };

  componentDidMount() {}

  renderPageRoutes = () => {
    return routes.map(route => (
      <Route
        path={route.path}
        exact={route.exact}
        component={route.component}
        key={route.name}
      />
    ));
  };

  toggleNav = () => {
    const navOpen = !this.state.navOpen;
    this.setState({ navOpen });
  };

  render() {
    const { navOpen } = this.state;
    return (
      <div className="App">
        {navOpen ? (
          <MainNav toggleNav={this.toggleNav} />
        ) : (
          <MenuToggler onClick={this.toggleNav} type={"open"} color={"white"} />
        )}

        <main>
          {this.renderPageRoutes()}
          <Route path="/" component={Eagle} />
        </main>
        <Canvas />
      </div>
    );
  }
}

export default App;
