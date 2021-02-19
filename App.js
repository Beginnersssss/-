import React from 'react';
import "./App.css"
import NaviBar from "./components/Navbar/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"

import {BrowserRouter as Router} from "react-router-dom"
import {Switch} from "react-router-dom"
import {Route} from "react-router-dom"

import {Home} from "./Home"
import {Enter} from "./Enter"
import {Graph} from "./Graph"
import {Avtor} from "./Avtor"
import {Regestr} from "./Regestr"
function App() {
  return (
    <>
    <Router>

   
    <NaviBar />
    <Switch>
      <Route exact path="/" component={Avtor} />
      <Route exact path="/regestr" component={Regestr} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/enter" component={Enter} />
      <Route exact path="/graph" component={Graph} />
    </Switch>
    </Router>
    </>
 
  );
}

export default App;
