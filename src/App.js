import React, { Component } from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Link,
  Switch
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// components
import Header from "./components/headerComponent/header";
import Footer from "./components/footerComponent/footer";
import Homepage from "./components/pages/homePage";
import MoreAboutMe from "./components/pages/moreAboutMe";

// includes
import "./Assets/css/default.min.css";

class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div className="App">
          <div className="box-1">
            <h4>Hello!</h4>
          </div>
          <div className="box-2">
            <Route exact path="/" component={Homepage}></Route>
            <Route exact path="/MoreAboutMe" component={MoreAboutMe}></Route>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
